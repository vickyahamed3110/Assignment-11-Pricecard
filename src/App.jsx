/* eslint-disable react/prop-types */
import "./App.css";
import React from "react";

function App() {

return (
  <div className="container">
    <div className="small-container">
 <AllPriceCard/>
 </div>
 </div>
);
}

export default App;

function AllPriceCard(){
  const pro = {
    type:"PRO",
    price: {
      value:49,
      style:"abled",
    },
    storage: {
      value:50,
      style:"abled",
    },
    access: {
      value:"unlimited users",
      style:"abled",
  },
    unlimitedpublicprojects: {
      value:"access",
      style:"abled",
    },
    communityaccess: {
      value:"access",
      style:"abled",
    },
    freesubdomain: {
      value:"access",
      style:"abled",
    },
    monthlystatusreport: {
      value:"access",
      style:"abled",
    },

};
    const free = {
      type:"FREE",
      price: {
        value:0,
        style:"abled",
        
    },
      storage: {
        value:50,
        style:"abled",
      },
      access: {
        value:"single user",
        style:"disabled",
    },
    unlimitedpublicprojects: {
      value: "nil",
      style:"abled",
    },
    communityaccess: {
      value:"access",
      style:"abled",
    },
    freesubdomain: {
      value:"nil",
      style:"abled",
    },
    monthlystatusreport: {
      value:"nil",
      style:"abled",
    },

    };
    const plus = {
      type:"PLUS",
      price: {
        value:9,
        style:"abled",
      },
      storage: {
        value:50,
        style:"abled",
      },
      access: {
        value:5,
        style:"abled",
      },
      unlimitedpublicprojects: {
        value:"access",
        style:"abled",
      },
      communityaccess: {
        value:"access",
        style:"abled",
      },
      freesubdomain: {
        value:"access",
        style:"abled",
      },
      monthlystatusreport: {
        value:"nil",
        style:"abled",
      },
    };
    
    return (
    <div className="all-cards">
      <PriceCardPro model={pro}/>
      <PriceCardFree model={free}/>
     <PriceCardPlus model={plus}/>
    </div>
  );
  }


function PriceCardPro({model}){
  return <div className="price-card">
    <p className="type">{model.type}</p>
    <p className={model.price.style}>Price:${model.price.value}</p>
    <p className={model.storage.style}><span>✅</span>Storage:{model.storage.value}gb</p>
    <p className={model.access.style}><span>✅</span>Access:{model.access.value}</p>
      <p className={model.unlimitedpublicprojects.style}><span>✅</span>unlimited public projects: {model.unlimitedpublicprojects.value}</p>
      <p className={model.communityaccess.style}><span>✅</span>community access: {model.communityaccess.value}</p>
      <p className={model.freesubdomain.style}><span>✅</span>Free subdomain: {model.freesubdomain.value}</p>
      <p className={model.monthlystatusreport.style}><span>✅</span>monthly status report: {model.monthlystatusreport.value}</p>
    <button>Buy</button>
  </div>
}

function PriceCardFree({model}){
  return <div className="price-card">
    <p className="type">{model.type}</p>
    <p className={model.price.style}>Price:${model.price.value}</p>
    <p className={model.storage.style}><span>✅</span>Storage:{model.storage.value}gb</p>
    <p className={model.access.style}><span>✅</span>Access:{model.access.value}</p>
      <p className={model.unlimitedpublicprojects.style}><span>❌</span>unlimited public projects: {model.unlimitedpublicprojects.value}</p>
      <p className={model.communityaccess.style}><span>✅</span>community access: {model.communityaccess.value}</p>
      <p className={model.freesubdomain.style}><span>❌</span>Free subdomain: {model.freesubdomain.value}</p>
      <p className={model.monthlystatusreport.style}><span>❌</span>monthly status report: {model.monthlystatusreport.value}</p>
    <button>Buy</button>
  </div>
}

function PriceCardPlus({model}){
  return <div className="price-card">
    <p className="type">{model.type}</p>
    <p className={model.price.style}>Price:${model.price.value}</p>
    <p className={model.storage.style}><span>✅</span>Storage:{model.storage.value}gb</p>
    <p className={model.access.style}><span>✅</span>Access:{model.access.value}</p>
      <p className={model.unlimitedpublicprojects.style}><span>✅</span>unlimited public projects: {model.unlimitedpublicprojects.value}</p>
      <p className={model.communityaccess.style}><span>✅</span>community access: {model.communityaccess.value}</p>
      <p className={model.freesubdomain.style}><span>✅</span>Free subdomain: {model.freesubdomain.value}</p>
      <p className={model.monthlystatusreport.style}><span>❌</span>monthly status report: {model.monthlystatusreport.value}</p>
    <button>Buy</button>
  </div>
}
  
    
 


// return (
  // React.createElement("h1", {className: "head", id: "h-1"}, 
  // React.createElement("i",{className:"italic"}, `JSX ${name}`)
  // ));

 