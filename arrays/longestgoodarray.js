////////////////////////////////////////Q.2.
/*Longest Good Array 1.0
LONGEST GOOD ARRAY 1.0
Problem Statement
Amy has an array A of length N. We define PK (1<=K<=N) as prefix sum of array up to
 Kth element, i.e., PK = A1 + A2 + …. + AK.
She calls an array “good”, if for each K (1<=K<=N) PK + Y*AK = X.
For given positive integers X and Y, Amy wants to know the length of the longest good array 
that exists. If no such good array exists print 0.
You are given T independent test cases.
Constraints
1 <= T <= 104
1 <= X, Y <= 109
All input values are integers.
Input Format
First-line contains T.
Next T lines each contains two space separated integers X and Y.
Output Format
Print in a newline for each test case a single integer denoting the length of the longest
 good array that exists. If no such good array exists print 0.
Sample Input 1
1
4 1
Sample Output 1
2
Explanation of Sample 1
(
A = [2, 1]
P1 = 2, P2 = 3
P1 + 1*A1 = 2 + 2 = 4 and P2 + 1*A2 = 3 + 1 = 4

*/