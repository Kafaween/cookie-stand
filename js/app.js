let i;
let j;
let x;
let globVar = document.getElementById('output');
let table=document.createElement("table");
globVar.appendChild(table)
let arrofobj=[];
let clock =[];
let sum=0
var total=0
var total2ltotal=0

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
            sum=0;
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
/*
 locations.random();
 locations.simulated() ;
 locations.render();
*/
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
            sum=0
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
            sum=0
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
            sum=0
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
            sum=0
            for(i=0;i<14;i++){
                sum=sum+this.amounts_of_cookies_purchased_for_each_hour[i]

            }
            elemnts1.textContent = `Total: ${sum} cookies`;
            
        




    }


}
/*
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
*/



 function locationn(name_,max_hourly_customers,min_hourly_customers,average_cookies_per_customer){

    this.name_=name_ ;
    this.max_hourly_customers=max_hourly_customers;
    this.min_hourly_customers=min_hourly_customers;
    this.average_cookies_per_customer=average_cookies_per_customer;
    this.number_of_customers_per_hour=[];
    this.amounts_of_cookies_purchased_for_each_hour=[];
    arrofobj.push(this);


 }
 locationn.prototype.random=function (){
    for(i=0;i<14;i++){
        this.number_of_customers_per_hour.push( getRandomArbitrary(this.min_hourly_customers,this.max_hourly_customers))
        }

 }

locationn.prototype.simulated=function(){
    for(i=0;i<14;i++){
        x=this.number_of_customers_per_hour[i]*this.average_cookies_per_customer
        
        this.amounts_of_cookies_purchased_for_each_hour.push(Math.floor(x))

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


 
 let th=[]
 function r_c (){
    let trEl = document.createElement('tr');
    table.appendChild(trEl);
    let thEl=document.createElement("th")
    trEl.appendChild(thEl)

    for(i=0;i<clock.length;i++){
        th.push(document.createElement("th"))
        
        trEl.appendChild(th[i])
        th[i].appendChild(document.createTextNode(`${clock[i]}`))
    
        }
    let thE1=document.createElement("th")
    trEl.appendChild(thE1)
    thE1.textContent="Daily Location Total";
    


 }
 r_c()
 console.log(arrofobj)


 var counter_obj=0
 locationn.prototype.render=function(){
    sum=0
    
    for(i=0;i<14;i++){
        sum=sum+this.amounts_of_cookies_purchased_for_each_hour[i]

    }
     
    
        var tr=document.createElement("tr")
        table.appendChild(tr)
        var th=document.createElement("th")
        tr.appendChild(th)
        th.textContent=`${this.name_}`
        counter_obj++
        for(i=0 ;i<clock.length;i++){
        var td =document.createElement("td")
        tr.appendChild(td)
        td.textContent=`${this.amounts_of_cookies_purchased_for_each_hour[i]}`}
         td =document.createElement("td")
         tr.appendChild(td)
         td.textContent=`${sum}`; }


       
 
  function footer(){
      
      var tr_f=document.createElement("tr")
      table.appendChild(tr_f)
      var th_f=document.createElement("th")
      tr_f.appendChild(th_f)
      th_f.textContent="Totals";
      for (i=0;i<clock.length;i++){
          var td_f=document.createElement("td")
          tr_f.appendChild(td_f)
          for(j=0;j<arrofobj.length;j++){
            
              total=total+(arrofobj[j].amounts_of_cookies_purchased_for_each_hour[i])


          }
           total2ltotal=total2ltotal +total
          td_f.textContent=total
          total=0



      }
      tt=document.createElement("td")
      tr_f.appendChild(tt)
      tt.textContent=total2ltotal
    }       
    
      

 let loc1 =new locationn ("seatlle",65,23,6.3)
 let loc2 =new locationn ("Tokyo",24,3,1.2)
 let loc3 =new locationn ("Dubai",38,11,3.7)
 let loc4 =new locationn ("Paris",38,20,2.3)
 let loc5 =new locationn ("Lima",16,2,4.6) 


 
 loc1.random()
 loc1.simulated()
 loc1.render()
 loc2.random()
 loc2.simulated()
 loc2.render()
 loc3.random()
 loc3.simulated()
 loc3.render()
 loc4.random()
 loc4.simulated()
 loc4.render()
 loc5.random()
 loc5.simulated()
 loc5.render()
 
  footer();
  





 
 