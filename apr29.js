/*A>=B
Problem Statement
Amy has an array A, of N integers. Initially all the elements of array are 0, i.e.,
Ai = 0 (1<=i<=N). She also has an array B of N integers.
In one operation she can chose an index K, (1<=K<=N) and increase each element of array A,
 by 1 except AK. (1-based indexing).
For example, N = 4, A = [0, 0, 0, 0], she can choose K = 2 and increase all the elements of
 array except A2. So, the array becomes A = [1, 0, 1,1]
Find minimum number of operations required for her to make each element of array A,
 greater than corresponding element in array B, i.e., for each i (1<=i<=N) make Ai>=Bi.
You are given T independent test cases.

Constraints

1 <= T <= 5
3 <= N <= 10^5
1 <= Bi < = 10^9
All input values are integers.

Input Format

First-line contains T.
First line of each test case consists of a single integer N.
Second line of each test case consists of N space separated integers denoting the array B.

Output Format

Print in a newline for each test case a single integer denoting the minimum number of operations
 required for her to make each element of array A, greater than corresponding element in array B
 , i.e., for each i (1<=i<=N) make Ai>=Bi.

Sample Input 1

1
3
2 1 1

Sample Output 1

2

Explanation of Sample 1

Initially A = [0, 0, 0]
In 1st operation, she choses K = 2, so A = [1, 0, 1]
In 2nd operation she choses K = 3, so A = [ 2, 1, 1]
Now for each i (1<=i<=3), Ai = Bi
*/


let arr1 = [0,0,0]
let arr2 = [2,1,1]
function solve(arr1,k){
    if (k <=arr1[n-1]){


    }
}