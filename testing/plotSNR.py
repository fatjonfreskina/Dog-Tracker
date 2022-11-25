import numpy as np
import matplotlib.pyplot as plt

plt.rcParams["figure.figsize"] = [7.50, 3.50]
plt.rcParams["figure.autolayout"] = True

plt.xlabel("Measures")
plt.ylabel("SNR (dB)")

y = np.array([
  '6.2',  '7',   '8.2',  '8.8', '7.5', '9',
  '6.8',  '5.8', '9.5',  '9',   '7.2',
  '8.5',  '8',   '8.5',  '7.8', '5',   '6.8',
  '10.8', '6.8', '7.2',  '8',   '5',   '10',
   '9',   '7.8',  '6',   '4',   '4.2',
  '3.2',  '2.5', '5.8',  '4.8', '9.2', '7.5',
  '8.8',  '0.2', '14.2', '3.5', '7.5', '9',
  '9.5',  '6.2',  '9',   '9.2', '7.5',
  '10.2', '6.8', '4.8',  '7.8'
])
x = np.arange(y.size)

data_new = y.astype(float)

print("Maximum: " + str(np.amax(data_new)))
#print("Minimum: " + str(np.minimum(data_new)))
print("Average: " + str(np.average(data_new)))
print("Standard deviation: " + str(np.std(data_new)))


plt.title("Line graph")
plt.plot(x, y, color="red")

plt.show()