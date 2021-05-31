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
  





 
 