library("plspm")
my<- read.csv(file = "C:/Users/trigunai/Desktop/survezdata.csv")
n1 = c(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
n2 = c(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
n3 = c(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
n4 = c(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
n5 = c(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
n6 = c(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
n7 = c(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
n8 = c(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
n9 = c(1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0)
n10 = c(0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0)
n11 = c(0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0)
n12 = c(0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0)
nfl_path = rbind(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12)
rownames(nfl_path) = c("Performance", "Features", "Aesthetics", "Material", "Serviceability", "Reliability", "Durability", "EaseofUSe", "CEPQ", "Satisfaction", "WTPP", "RI")
innerplot(nfl_path, box.size = 0.05)
colnames(nfl_path) = rownames(nfl_path)
nfl_blocks = list(1:7,8:11,12:15,16:19,20:24,25:27,28:34,35:38,1:38,39:41,42:44,45:46)
nfl_modes = rep("A", 12)
nfl_pls1 = plspm(my, nfl_path, nfl_blocks, modes = nfl_modes, boot.val = TRUE, br = 200)
plot(nfl_pls1, box.size = 0.05)
summary(nfl_pls1)
nfl_pls1$boot