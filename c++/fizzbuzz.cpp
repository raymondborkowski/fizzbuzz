#include <sstream>
#include <iostream>
#include <map>

using namespace std;


map<int,string> fizzBuzz(map<int,string> mymap){
    map<int,string> output;
    bool found = false;
    string newLongLine;

    for(int i = 1; i <101; i++) {
        found = false;
        newLongLine="";
        for(map<int,std::string>::iterator it=mymap.begin(); it!=mymap.end(); ++it) {
            if(i %  it->first == 0){
                found = true;
                newLongLine += it->second;
            }
        }
        if(!found) {
          std::ostringstream ss;
          ss << i;
          newLongLine = ss.str();
        }

        output.insert(pair<int,string>(i,newLongLine));
    }

    return output;
}

int main ()
{
    //Creates Map
    map<int,string> mymap;
    mymap[2] = "second";
    mymap[3] = "Fizz";
    mymap[5] = "Buzz";
    mymap[6] = "sixth";

    mymap = fizzBuzz(mymap);


    //Prints Map
    for (map<int,std::string>::iterator it=mymap.begin(); it!=mymap.end(); ++it)
        std::cout<<it->first<<':'<<it->second<<std::endl;


    return 0;
}
