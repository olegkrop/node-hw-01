# Node.js homework #1
## Task 1
### Command line interface using `yargs` module

The list of contacts: `node index --action="list"`
![node index --action="list"](/screenshots/yargs-list.png)

To get a contact by Id: `node index --action="get" --id 05olLMgyVQdWRwgKfg5J6`
![node index --action="get" --id 05olLMgyVQdWRwgKfg5J6](/screenshots/yargs-get.png)

To add a contact: `node index --action="add" --name "John Deer" --email john.deer@gmail.com --phone "(212) 121-2121"`
![node index --action="add" --name "John Deer" --email john.deer@gmail.com --phone "(212) 121-2121"](/screenshots/yargs-add.png)

To remove a contact: `node index --action="remove" --id O7EiHRD9haahebUUyc_Iz`
![node index --action="remove" --id O7EiHRD9haahebUUyc_Iz](/screenshots/yargs-remove.png)

## Task 2
### Command line interface using `commander` module

To use the `commander` module, we have to open the file [index.js](https://github.com/olegkrop/node-hw-01/blob/main/index.js), to comment the code after<br/>
`// --------------------Start (using yargs)------------------------`<br/>
and fefore<br/>
`// --------------------End (using yargs)--------------------------`<br/>
Next, we have to uncomment the code after<br/>
`// --------------------Start (using commander)--------------------`<br/>
and fefore<br/>
`// --------------------End (using commander)----------------------`<br/>

The list of contacts: `node index -a list`
![node index -a list](/screenshots/commander-list.png)

To get a contact by Id: `node index -a get -i drsAJ4SHPYqZeG-83QTVW`
![node index -a get -i drsAJ4SHPYqZeG-83QTVW](/screenshots/commander-get.png)

To add a contact: `node index -a add -n "John Deer" -e john.deer@gmail.com -p "(212) 121 2121"`
![node index -a add -n "John Deer" -e john.deer@gmail.com -p "(212) 121 2121"](/screenshots/commander-add.png)

To remove a contact: `node index -a remove -i Q1q4GsedNNLr-ogoTT5ks`
![node index -a remove -i Q1q4GsedNNLr-ogoTT5ks](/screenshots/commander-remove.png)
