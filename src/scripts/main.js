// const output = document.querySelector("#output")

// const dateVisited = "visitDate"
// const owed = "amountBilled"
// const patient = "patientName"

// const drAppt = {
//     officeName:"Medical",
//     streetAddress:"123 main",
//     doctorName:"Dr. Pepper",
//     patientName:"Mollie G",
//     visitDate:"1/1/20",
//     amountBilled:"100.00",
//     dueDate:"6/1/20"
// }

// const values = Object.values(drAppt)

// const keys = Object.keys(drAppt)

// for (const keys of Object.keys(drAppt)){
// output.innerHTML += `
// <section>
// <span>${keys}<span>
// </section>`
// }
// const dinner = document.querySelector("#food")

// const favDinner = {
//     name : "wings",
//     cuisine :"american",
//     vegetarian :"false",
//     size :"ten piece",
//     special :"all flats"
// };

//  for (const entry of Object.entries(favDinner)){
//     dinner.innerHTML += `
//    <article>${entry}</article>`

// }
// const output = document.querySelector("#output")
const salesByWeek = [
    {
        "vehicle": {
            "year": 2013,
            "model": "Tanex",
            "make": "Tamp-dax",
            "color": "quartz"
        },
        "sales_id": "782a23fd-8b83-4497-b9a1-41fd9b15648e",
        "sales_agent": {
            "mobile": "1-584-162-7444",
            "last_name": "Larkin",
            "first_name": "Tiara",
            "email": "ready@gmail.com"
        },
        "purchase_date": "2017-06-07",
        "gross_profit": 210,
        "credit": {
            "credit_provider": "United Services Automobile Assoc.",
            "account": "491697193540559"
        }
    },
    {
        "vehicle": {
            "year": 2012,
            "model": "Volttanphase",
            "make": "Tinlotis",
            "color": "french fuchsia"
        },
        "sales_id": "c6775819-5d17-40db-94f4-00425db590ee",
        "sales_agent": {
            "mobile": "1-573-820-3780",
            "last_name": "Schulist",
            "first_name": "Vada",
            "email": "davin@outlook.com"
        },
        "purchase_date": "2017-08-06",
        "gross_profit": 1886.61,
        "credit": {
            "credit_provider": "TD Group US Holding",
            "account": "494781657570"
        }
    },
    {
        "vehicle": {
            "year": 2013,
            "model": "Lexi-ton",
            "make": "Ware-com",
            "color": "metallic brown"
        },
        "sales_id": "d10631e7-24ca-414b-ac0f-34b286a30f14",
        "sales_agent": {
            "mobile": "1-356-831-5782",
            "last_name": "Leannon",
            "first_name": "Geovanni",
            "email": "need@hotmail.com"
        },
        "purchase_date": "2017-12-27",
        "gross_profit": 154.91,
        "credit": {
            "credit_provider": "State Street Corporation",
            "account": "546417363501851"
        }
    },
    {
        "vehicle": {
            "year": 2011,
            "model": "Onto-zun",
            "make": "Strongzoom",
            "color": "medium slate blue"
        },
        "sales_id": "586bf9d9-67c2-46c7-a6d1-de8484f6c474",
        "sales_agent": {
            "mobile": "774.020.0247",
            "last_name": "Lang",
            "first_name": "Jovani",
            "email": "spell55@yahoo.com"
        },
        "purchase_date": "2017-03-05",
        "gross_profit": 814.49,
        "credit": {
            "credit_provider": "M&T Bank Corporation",
            "account": "34730046974022"
        }
    },
    {
        "vehicle": {
            "year": 2014,
            "model": "Blue-run",
            "make": "Kon-flex",
            "color": "lumber"
        },
        "sales_id": "a5358cb3-6d47-4adb-a232-d5c5d91e25ec",
        "sales_agent": {
            "mobile": "886.374.3898",
            "last_name": "Feil",
            "first_name": "Kory",
            "email": "ducimus@outlook.com"
        },
        "purchase_date": "2017-02-08",
        "gross_profit": 587.52,
        "credit": {
            "credit_provider": "Atlantic Bank",
            "account": "601149379893233"
        }
    }
]
output.innerHTML += "<h1>Weekly Sales Report</h1>"

salesByWeek.forEach(sale => {   //loop thru each object in the array, forEach individual sale...
    output.innerHTML += "<hr/>"     //add break to the innerhtml of the output ...
    output.innerHTML += `<h3>${sale.sales_agent.first_name} ${sale.sales_agent.last_name}</h3>` // adds first & last name of each sales agent to the output innerHTML


    for (const key in sale.vehicle) { //loop over all keys in the vehicle object on each sale for each key in the object..
        output.innerHTML += `<p>${key}: ${sale.vehicle[key]}</p>` // adding key and value pairs of the vehicle object to the output of innerhtml
    }
output.innerHTML += `
<h3> Gross Profit: ${sale.gross_profit}</h3>`
})
