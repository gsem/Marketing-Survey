library("mongolite", lib.loc="~/R/win-library/3.4")
library("plyr", lib.loc="~/R/win-library/3.4")
surveydata<-mongo(collection = "surveydatas", url = "mongodb://newdbuser:geneva123@ds129023.mlab.com:29023/geneva")
surveyData<-surveydata$find(query = '{}', fields = '{}')
productdata<-mongo(collection = "products", url = "mongodb://newdbuser:geneva123@ds129023.mlab.com:29023/geneva")
productData<-productdata$find(query = '{}', fields = '{"userId": 0}')
colnames(productData)[1]<-"productId"
responseData <- lapply(surveyData$response, function(x){ unlist(x)})
responseData <- rbind.fill(lapply(responseData,
                                  function(x) do.call("data.frame", as.list(x))))
data<- merge(surveyData, productData, by="productId")
data<- cbind(data,responseData)