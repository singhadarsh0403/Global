var puppeteer = require('puppeteer');
var lodash = require('lodash')
const common = require('./useless/common')
var fs = require("fs")

// const data ={
//     catagories :[]
// }
const data = [];
fetchindeed = async (url,callback)=>{
    const browser = await puppeteer.launch({headless:false})
    const page = await browser.newPage();
    await page.goto(url,{waitUntil:'domcontentloaded'});
    await page.addScriptTag({url:'https://code.jquery.com/jquery-3.2.1.min.js'});
    const resut = await page.evaluate((data)=>{
        
        //var obj = {rating: $('.cmp-CompactHeaderCompanyRatings-value').text()}
        var obj = $('.cmp-CompactHeaderCompanyRatings-value').text()
        //data.catagories.push(parseFloat(obj));
        data.push(parseFloat(obj));
        return data;
        //return parseFloat(obj);
    },data)   
    await page.close();
    await browser.close();
    callback(resut,true);
}

fetchcomparably = async (url,callback)=>{
    const browser = await puppeteer.launch({headless:false})
    const page = await browser.newPage();
    await page.goto(url,{waitUntil:'domcontentloaded'});
    await page.addScriptTag({url:'https://code.jquery.com/jquery-3.2.1.min.js'});
    const resut = await page.evaluate((data)=>{
        //var obj = {rating: $('.numerator').text()}   
        var obj =    $('.numerator').text()
            //data.catagories.push(parseFloat(obj));
            data.push(parseFloat(obj));
            return data;
            //return parseFloat(obj);
    },data)   
    await page.close();
    await browser.close();
    callback(resut,true);
}

fetchkununu = async (url,callback)=>{
    const browser = await puppeteer.launch({headless:false})
    const page = await browser.newPage();
    await page.goto(url,{waitUntil:'domcontentloaded'});
    await page.addScriptTag({url:'https://code.jquery.com/jquery-3.2.1.min.js'});
    const resut = await page.evaluate((data)=>{

         //var obj = {rating: $('.overview-value').text().trim().replace(/ /g,'').slice(0,3)}
        var obj = $('.overview-value').text().trim().replace(/ /g,'').slice(0,3)
            //data.catagories.push(parseFloat(obj));
            data.push(parseFloat(obj));
            return data;
            //return parseFloat(obj);
    },data)   
    await page.close();
    await browser.close();
    callback(resut,true);
}



//body > section.bg-light-grey.border-bottom > div > div > div > div.v7-margin-top-12.v7-margin-bottom-24.v7-color-grey > div > span:nth-child(2)

fetchinher = async (url,callback)=>{
    const browser = await puppeteer.launch({headless:false})
    const page = await browser.newPage();
    await page.goto(url,{waitUntil:'domcontentloaded'});
    await page.addScriptTag({url:'https://code.jquery.com/jquery-3.2.1.min.js'});
    const resut = await page.evaluate((data)=>{
         //var obj = {rating: $('.v7-margin-top-12.v7-margin-bottom-24.v7-color-grey div span').eq(2).text().trim().replace(/ /g,'').slice(0,3)}
         var obj =    $('.v7-margin-top-12.v7-margin-bottom-24.v7-color-grey div span').eq(2).text().trim().replace(/ /g,'').slice(0,3)
         //data.catagories.push(parseFloat(obj));
         data.push(parseFloat(obj));
         return data;
        // return parseFloat(obj);
    },data)   
    await page.close();
    await browser.close();
    callback(resut,true);
}


fetchindeed(common.baseUrl+'facebook'+common.mainCatUrlLast, (data, response)=>{
    if(response)
    console.log(data);
    fs.appendFile("all.json",JSON.stringify(data),function(err){
        if(err){
            console.log('error')
        }else{
            console.log('exported')
        }
    });
    if(!response){
        data.catagories.push({rating:0});
        console.log(data);
    }
})

fetchcomparably('https://www.comparably.com/companies/facebook', (data, response)=>{
    if(response)
    console.log(data);
    fs.appendFile("all.json",JSON.stringify(data),function(err){
        if(err){
            console.log('error')
        }else{
            console.log('exported')
        }
    });
    if(!response){
        data.catagories.push({rating:0});
        console.log(data);
    }
})

fetchkununu('https://www.kununu.com/us/indeed', (data, response)=>{
    if(response)
    console.log(data);
    fs.appendFile("all.json",JSON.stringify(data),function(err){
        if(err){
            console.log('error')
        }else{
            console.log('exported')
        }
    });
    if(!response){
        data.catagories.push({rating:0});
        console.log(data);
    }
})

fetchinher('https://www.inhersight.com/company/facebook?_n=115719818', (data, response)=>{
    if(response)
    console.log(data);
    fs.appendFile("all.json",JSON.stringify(data),function(err){
        if(err){
            console.log('error')
        }else{
            console.log('exported')
        }
    });
    if(!response){
        data.catagories.push({rating:0});
        console.log(data);
    }
})

//setTimeout((...data)=>{console.log(data)},60000)


