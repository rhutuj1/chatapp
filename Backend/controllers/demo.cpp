#include <bits/stdc++.h>
using namespace std;

int main() {
int t;
cin>>t;
while(t--)
{
    long long n, m;
    string str1, str2;

cin>>n >> m >> str1>>str2;
 map<char, int> mp;

if(m > n)
 {
 swap(m, n);

 swap(str1, str2);
 }
 for(int i=0; i<n; i++)
 mp[str1[i]] += 1;

for(int i=0; i<m; i++)
 mp[str2[i]] -= 1;
 int flag = 1, cnt = 0, diff = n-m;
 for(auto i : mp)
 {
    if(i.second < 0)
    {
        flag = 0;
        break;
    }

 if(i.second % 2 == 0)
    {
        continue;
    }

    if(cnt)
    {
    flag = 0;
    }
    else
    {
    cnt = 1;
    }
}
 if(flag)
cout<<"YES\n";
 else
cout<<"NO\n";
}
return 0;
}