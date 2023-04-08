let devices= {
    "iphone":[{
            "name":"iphone 14 pro",
            "issues":{
                "camera":"2000",
                "battery":"3000",
                "screen":"4000"
            }
        },
        {
            "name":"iphone 14",
            "issues":{
                "camera":"1500",
                "battery":"2500",
                "screen":"3500"
            }
        },
        {
            "name":"iphone 13 pro",
            "issues":{
                "camera":"1000",
                "battery":"2000",
                "screen":"3000"
            }
        }],
    "samsung":[{
        "name":"Samsung S22 Ultra",
        "issues":{
            "camera":"2000",
            "battery":"3000",
            "screen":"4000"
        }
    },
        {
            "name":"Samsung S22",
            "issues":{
                "camera":"1500",
                "battery":"2500",
                "screen":"3500"
            }
        },
        {
            "name":"Samsung S21 pro",
            "issues":{
                "camera":"1000",
                "battery":"2000",
                "screen":"3000"
            }
        }],
    "oneplus":[
        {
            "name":"Oneplus 11",
            "issues":{
                "camera":"2000",
                "battery":"3000",
                "screen":"4000"
            }
        },
        {
            "name":"Oneplus 10",
            "issues":{
                "camera":"1500",
                "battery":"2500",
                "screen":"3500"
            }
        },
        {
            "name":"Oneplus 9",
            "issues":{
                "camera":"1000",
                "battery":"2000",
                "screen":"3000"
            }
        },
    ],
    "computer":[
        {
            "name":"Macbook pro",
            "issues":{
                "camera":"2000",
                "battery":"3000",
                "screen":"4000"
            }
        },
        {
            "name":"Macbook air",
            "issues":{
                "camera":"1500",
                "battery":"2500",
                "screen":"3500"
            }
        },
        {
            "name":"Macbook",
            "issues":{
                "camera":"1000",
                "battery":"2000",
                "screen":"3000"
            }
        }
    ],
    "tablet":[
        {
            "name":"Ipad pro",
            "issues":{
                "camera":"2000",
                "battery":"3000",
                "screen":"4000"
            }
        },
        {
            "name":"Ipad air",
            "issues":{
                "camera":"1500",
                "battery":"2500",
                "screen":"3500"
            }
        },
        {
            "name":"Ipad",
            "issues":{
                "camera":"1000",
                "battery":"2000",
                "screen":"3000"
            }
        }
        ],
    "watch":[
        {
            "name":"Apple watch",
            "issues":{
                "battery":"3000",
                "screen":"4000"
            }
        },
        {
            "name":"Samsung watch",
            "issues":{
                "battery":"2500",
                "screen":"3500"
            }
        },
        {
            "name":"Oneplus watch",
            "issues":{
                "battery":"2000",
                "screen":"3000"
            }
        }
    ]
}

let device = document.querySelector("#device");
let model = document.querySelector("#model");
let issue = document.querySelector("#issue");

document.querySelector("#device").addEventListener("change", ()=>{
    let deviceName = device.value;
    let models = devices[deviceName];
    let modelOptions = "<option value='' selected>Choose your Mobile</option>";
    for(let i=0; i<models.length; i++){
        modelOptions += `<option value="${models[i].name}">${models[i].name}</option>`;
    }
    model.innerHTML =  modelOptions;
});

model.addEventListener("change", ()=>{
    let deviceName = device.value;
    let deviceIssues = devices[deviceName];
    let modelName = model.value;
    let issueOptions = "<option value='' selected>Choose your Issue</option>\n";
    for(let i=0; i<deviceIssues.length; i++){
        if(modelName === deviceIssues[i].name){
            for(let key in deviceIssues[i].issues){
                issueOptions += `<option value="${key}">${key}</option>`;
            }
        }
    }
    issue.innerHTML = issueOptions;
});


issue.addEventListener("change", ()=>{
    if(device.value!=="" && issue.value!=="" &&  model.value!==""){
        /*getPrice();*/
        let text = `
                <b><h3 class="text-center">Selected Item</h3></b>
                <p><b class="text-primary">Device: </b> ${device.value}</p>
                <p><b class="text-primary">Model: </b> ${model.value}</p>
                <p><b class="text-primary">Issue: </b> ${issue.value}</p>
                <p><b class="text-primary">Warranty: </b> 1 Year Warranty</p>
                <p><b class="text-primary">Description: </b> Most ${device.value} repairs are completed in an hour or two, though we often have to order parts. We use high quality parts and our technicians are expert trained. We also price match! Find another local shop with better pricing, we'll match it! Thousands of people have loved our service and we're sure you will too. Get your price quote now to get started with your repair. Look forward to speaking with you!</p>
        
       `;
        document.querySelector("#quotation").innerHTML = text;
        document.querySelector('#quote-form').innerHTML=`

            <div class="form-check">
                    <input class="form-check-input" type="radio" name="delivery" id="email-option">
                    <label class="form-check-label text-white" for="email-option">
                        Email(Instant)
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="delivery" id="phone-option" checked>
                    <label class="form-check-label text-white" for="phone-option">
                        Phone Call
                    </label>
                </div>
                <div class="my-3">
                    <input type="text" class="form-control" required id="name" placeholder="Name">
                </div>
                <div class="my-3">
                    <input type="email" class="form-control" required id="email" placeholder="Email">
                </div>
                <div class="my-3">
                    <input type="phone" class="form-control" required id="phone" placeholder="Phone">
                </div>
                <div class="my-3">
                    <input type="text" class="form-control" required id="city" placeholder="City">
                </div>
                <div class="my-3">
                    <textarea class="form-control" id="message" required rows="3" placeholder="Message"></textarea>
                </div>
                <div class="mt-3">
                    <button type="submit" class="btn btn-primary" id="quote">Get Quote</button>
                </div>`;

    }
    else{
        alert("Select all fields");
    }
});

