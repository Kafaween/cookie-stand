let i;
let x
let globVar = document.getElementById('output');
let clock =[];
let sum=0

let locations= {
    name_:"seatlle" ,
    max_hourly_customers:23,
    min_hourly_customers:65,
    average_cookies_per_customer:6.3,
    number_of_customers_per_hour:[],
    amounts_of_cookies_purchased_for_each_hour:[],
    random:function(){
        for(i=0;i<14;i++){
        this.number_of_customers_per_hour.push( getRandomArbitrary(this.min_hourly_customers,this.max_hourly_customers))
        }
        
    },
    simulated:function(){
        for(i=0;i<14;i++){
            x=this.number_of_customers_per_hour[i]*this.average_cookies_per_customer
            
            this.amounts_of_cookies_purchased_for_each_hour.push(Math.floor(x))

        }


    },
    render:function(){
        let listEl = document.createElement('ul');
        globVar.appendChild(listEl);
        listEl.textContent=this.name_;
        for(i=0;i<14;i++){
            let elemnts = document.createElement('li');
            listEl.appendChild(elemnts);
            elemnts.textContent = `${clock[i]} : ${this.amounts_of_cookies_purchased_for_each_hour[i]} cookies`;
        }
        let elemnts1 = document.createElement('li');
            listEl.appendChild(elemnts1);
            for(i=0;i<14;i++){
                sum=sum+this.amounts_of_cookies_purchased_for_each_hour[i]

            }
            elemnts1.textContent = `Total: ${sum} cookies`;
            
        




    }


}
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  function making_clock(start,end){
    var x=start;
    let c=[]
    while( x<end){
   var newformat = x >= 12 ? 'PM' : 'AM'; 
   start = start % 12;
   start = start ? start : 12;
   c.push(` ${start} :${newformat}`)
   start++;
   x++;
}
return  c;
}

clock=making_clock(6,20);

 locations.random();
 locations.simulated() ;
 locations.render();

 let locations1= {
    name_:"Tokyo" ,
    max_hourly_customers:42,
    min_hourly_customers:3,
    average_cookies_per_customer:1.2,
    number_of_customers_per_hour:[],
    amounts_of_cookies_purchased_for_each_hour:[],
    random:function(){
        for(i=0;i<14;i++){
        this.number_of_customers_per_hour.push( getRandomArbitrary(this.min_hourly_customers,this.max_hourly_customers))
        }
        
    },
    simulated:function(){
        for(i=0;i<14;i++){
            x=this.number_of_customers_per_hour[i]*this.average_cookies_per_customer
            
            this.amounts_of_cookies_purchased_for_each_hour.push(Math.floor(x))

        }


    },
    render:function(){
        let listEl = document.createElement('ul');
        globVar.appendChild(listEl);
        listEl.textContent=this.name_;
        for(i=0;i<14;i++){
            let elemnts = document.createElement('li');
            listEl.appendChild(elemnts);
            elemnts.textContent = `${clock[i]} : ${this.amounts_of_cookies_purchased_for_each_hour[i]} cookies`;
        }
        let elemnts1 = document.createElement('li');
            listEl.appendChild(elemnts1);
            for(i=0;i<14;i++){
                sum=sum+this.amounts_of_cookies_purchased_for_each_hour[i]

            }
            elemnts1.textContent = `Total: ${sum} cookies`;
            
        




    }


}

let locations2= {
    name_:"Dubai" ,
    max_hourly_customers:38,
    min_hourly_customers:11,
    average_cookies_per_customer:3.7,
    number_of_customers_per_hour:[],
    amounts_of_cookies_purchased_for_each_hour:[],
    random:function(){
        for(i=0;i<14;i++){
        this.number_of_customers_per_hour.push( getRandomArbitrary(this.min_hourly_customers,this.max_hourly_customers))
        }
        
    },
    simulated:function(){
        for(i=0;i<14;i++){
            x=this.number_of_customers_per_hour[i]*this.average_cookies_per_customer
            
            this.amounts_of_cookies_purchased_for_each_hour.push(Math.floor(x))

        }


    },
    render:function(){
        let listEl = document.createElement('ul');
        globVar.appendChild(listEl);
        listEl.textContent=this.name_;
        for(i=0;i<14;i++){
            let elemnts = document.createElement('li');
            listEl.appendChild(elemnts);
            elemnts.textContent = `${clock[i]} : ${this.amounts_of_cookies_purchased_for_each_hour[i]} cookies`;
        }
        let elemnts1 = document.createElement('li');
            listEl.appendChild(elemnts1);
            for(i=0;i<14;i++){
                sum=sum+this.amounts_of_cookies_purchased_for_each_hour[i]

            }
            elemnts1.textContent = `Total: ${sum} cookies`;
            
        




    }


}

let locations3= {
    name_:"Paris" ,
    max_hourly_customers:38,
    min_hourly_customers:20,
    average_cookies_per_customer:2.3,
    number_of_customers_per_hour:[],
    amounts_of_cookies_purchased_for_each_hour:[],
    random:function(){
        for(i=0;i<14;i++){
        this.number_of_customers_per_hour.push( getRandomArbitrary(this.min_hourly_customers,this.max_hourly_customers))
        }
        
    },
    simulated:function(){
        for(i=0;i<14;i++){
            x=this.number_of_customers_per_hour[i]*this.average_cookies_per_customer
            
            this.amounts_of_cookies_purchased_for_each_hour.push(Math.floor(x))

        }


    },
    render:function(){
        let listEl = document.createElement('ul');
        globVar.appendChild(listEl);
        listEl.textContent=this.name_;
        for(i=0;i<14;i++){
            let elemnts = document.createElement('li');
            listEl.appendChild(elemnts);
            elemnts.textContent = `${clock[i]} : ${this.amounts_of_cookies_purchased_for_each_hour[i]} cookies`;
        }
        let elemnts1 = document.createElement('li');
            listEl.appendChild(elemnts1);
            for(i=0;i<14;i++){
                sum=sum+this.amounts_of_cookies_purchased_for_each_hour[i]

            }
            elemnts1.textContent = `Total: ${sum} cookies`;
            
        




    }


}

let locations4= {
    name_:"Lima" ,
    max_hourly_customers:16,
    min_hourly_customers:2,
    average_cookies_per_customer:4.6,
    number_of_customers_per_hour:[],
    amounts_of_cookies_purchased_for_each_hour:[],
    random:function(){
        for(i=0;i<14;i++){
        this.number_of_customers_per_hour.push( getRandomArbitrary(this.min_hourly_customers,this.max_hourly_customers))
        }
        
    },
    simulated:function(){
        for(i=0;i<14;i++){
            x=this.number_of_customers_per_hour[i]*this.average_cookies_per_customer
            
            this.amounts_of_cookies_purchased_for_each_hour.push(Math.floor(x))

        }


    },
    render:function(){
        let listEl = document.createElement('ul');
        globVar.appendChild(listEl);
        listEl.textContent=this.name_;
        for(i=0;i<14;i++){
            let elemnts = document.createElement('li');
            listEl.appendChild(elemnts);
            elemnts.textContent = `${clock[i]} : ${this.amounts_of_cookies_purchased_for_each_hour[i]} cookies`;
        }
        let elemnts1 = document.createElement('li');
            listEl.appendChild(elemnts1);
            for(i=0;i<14;i++){
                sum=sum+this.amounts_of_cookies_purchased_for_each_hour[i]

            }
            elemnts1.textContent = `Total: ${sum} cookies`;
            
        




    }


}
locations1.random();
 locations1.simulated() ;
 locations1.render();

 locations2.random();
 locations2.simulated() ;
 locations2.render();

 locations3.random();
 locations3.simulated() ;
 locations3.render();

 locations4.random();
 locations4.simulated() ;
 locations4.render();

  
 
 