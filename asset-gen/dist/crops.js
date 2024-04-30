(()=>{"use strict";const e=JSON.parse('[{"name":"Blue Jazz","season":"Spring","seed_cost":30,"sell_price":50,"days_to_grow":7},{"name":"Carrot","season":"Spring","seed_cost":0,"sell_price":35,"days_to_grow":3},{"name":"Cauliflower","season":"Spring","seed_cost":80,"sell_price":175,"days_to_grow":12},{"name":"Coffee Bean","season":"Spring","seed_cost":15,"sell_price":15,"days_to_grow":10,"regrowth_period":2,"yield":4,"percent_chance_extra":2},{"name":"Garlic","season":"Spring","seed_cost":40,"sell_price":60,"days_to_grow":4},{"name":"Green Bean","season":"Spring","seed_cost":60,"sell_price":40,"days_to_grow":10,"regrowth_period":3},{"name":"Kale","season":"Spring","seed_cost":70,"sell_price":110,"days_to_grow":6},{"name":"Parsnip","season":"Spring","seed_cost":20,"sell_price":35,"days_to_grow":4},{"name":"Potato","season":"Spring","seed_cost":50,"sell_price":80,"days_to_grow":6,"percent_chance_extra":25},{"name":"Rhubarb","season":"Spring","seed_cost":100,"sell_price":220,"days_to_grow":13},{"name":"Rice","season":"Spring","seed_cost":40,"sell_price":30,"days_to_grow":6},{"name":"Strawberry","season":"Spring","seed_cost":100,"sell_price":120,"days_to_grow":8,"regrowth_period":4,"percent_chance_extra":2},{"name":"Tulip","season":"Spring","seed_cost":20,"sell_price":30,"days_to_grow":6}]');var t;function r(e,r){var o,s,n,a,l;let i=28-r.start_day,c=0,d=0;if(i>=e.days_to_grow&&(c+=1,d+=e.days_to_grow,e.regrowth_period)){let t=Math.floor((i-e.days_to_grow)/e.regrowth_period);c+=t,d+=t*e.regrowth_period}let _=c*((null!==(o=e.yield)&&void 0!==o?o:1)+(null!==(s=e.percent_chance_extra)&&void 0!==s?s:0)/100),p=_*e.sell_price-e.seed_cost,u=p/d;return{name:e.name,season:t.fromString(e.season),seed_cost:e.seed_cost,sell_price:e.sell_price,days_to_grow:e.days_to_grow,regrowth_period:null!==(n=e.regrowth_period)&&void 0!==n?n:null,yield:null!==(a=e.yield)&&void 0!==a?a:null,percent_chance_extra:null!==(l=e.percent_chance_extra)&&void 0!==l?l:null,useful_days:d,num_harvests:c,num_crops:_,profit:p,daily_profit:u}}!function(e){e[e.SPRING=0]="SPRING",e[e.SUMMER=1]="SUMMER",e[e.FALL=2]="FALL"}(t||(t={})),function(e){e.fromString=function(t){switch(t.toUpperCase()){case"SPRING":return e.SPRING;case"SUMMER":return e.SUMMER;case"FALL":return e.FALL;default:throw new Error(`Unknown season ${t}`)}}}(t||(t={}));const o=[{name:"Name",cellText:e=>e.name,compare:(e,t)=>e.name.localeCompare(t.name)},{name:"Season",cellText:e=>t[e.season],compare:(e,t)=>e.season.valueOf()-t.season.valueOf()},{name:"Seed Cost",cellText:e=>e.seed_cost.toString(),compare:(e,t)=>e.seed_cost-t.seed_cost},{name:"Sell Price",cellText:e=>e.sell_price.toString(),compare:(e,t)=>e.sell_price-t.sell_price},{name:"Days to Grow",cellText:e=>e.days_to_grow.toString(),compare:(e,t)=>e.days_to_grow-t.days_to_grow},{name:"Regrowth Period",cellText:e=>{var t,r;return null!==(r=null===(t=e.regrowth_period)||void 0===t?void 0:t.toString())&&void 0!==r?r:"-"},compare:(e,t)=>null===t.regrowth_period?-1:null===e.regrowth_period?1:e.regrowth_period-t.regrowth_period},{name:"Yield",cellText:e=>{var t;let r=null!==(t=e.yield)&&void 0!==t?t:1;return e.percent_chance_extra?`${r} + ${e.percent_chance_extra}%`:r.toString()},compare:(e,t)=>{var r,o,s,n;return(null!==(r=e.yield)&&void 0!==r?r:1)+(null!==(o=e.percent_chance_extra)&&void 0!==o?o:0)/100-((null!==(s=t.yield)&&void 0!==s?s:1)+(null!==(n=t.percent_chance_extra)&&void 0!==n?n:0)/100)}},{name:"Useful Days",cellText:e=>e.useful_days.toString(),compare:(e,t)=>e.useful_days-t.useful_days},{name:"Num Harvests",cellText:e=>e.num_harvests.toString(),compare:(e,t)=>e.num_crops-t.num_crops},{name:"Num Crops",cellText:e=>{let t=e.num_crops;return Number.isInteger(t)?t.toString():e.num_crops.toFixed(2)},compare:(e,t)=>e.num_crops-t.num_crops},{name:"Profit",cellText:e=>e.profit.toFixed(2),compare:(e,t)=>e.profit-t.profit},{name:"Daily Profit",cellText:e=>Number.isFinite(e.daily_profit)?e.daily_profit.toFixed(2):"-",compare:(e,t)=>e.daily_profit-t.daily_profit}];class s{constructor(e,t){this.data=t,this.row=e;for(let e of o){let t=e.cellText(this.data);this.row.insertCell().appendChild(document.createTextNode(t))}}}function n(e){switch(e){case"ascending":return"descending";case"descending":return"ascending"}}class a{constructor(e){this.table=e,this.rows=[],this.current_sort=null,this.thead=this.table.createTHead(),this.tbody=this.table.createTBody();let t=this.thead.insertRow();for(let[e,r]of o.entries()){let o=t.insertCell();o.appendChild(document.createTextNode(r.name)),o.addEventListener("click",(t=>{let r;r=null!==this.current_sort&&this.current_sort[0]===e?n(this.current_sort[1]):"ascending",this.current_sort=[e,r];let o=this.thead.querySelectorAll("td");for(let e of o)console.log(this),e.removeAttribute("aria-sort");o[e].setAttribute("aria-sort",r),this.sortRows()}))}}repopulateTable(t){this.tbody.replaceChildren(),this.rows=[];for(let o of e){let e=r(o,t),n=this.tbody.insertRow();this.rows.push(new s(n,e))}this.sortRows()}sortRows(){if(null===this.current_sort)return;let[e,t]=this.current_sort,r=o[e];this.rows.sort(((e,o)=>{let s=r.compare(e.data,o.data);return"ascending"===t?s:-s}));for(let e of this.rows)this.tbody.appendChild(e.row)}}function l(){console.log("Initializing!");let e=document.getElementById("crop-table");if(!(e instanceof HTMLTableElement))throw new Error("crop-table should be a <table>");let t=document.getElementById("input-panel"),r=document.querySelector("#day");function o(){return{start_day:r.valueAsNumber}}let s=new a(e);s.repopulateTable(o()),t.addEventListener("change",(e=>{s.repopulateTable(o())}))}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",l):l()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2Nyb3BzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gc2hvdWxkIGkgcHVsbCB0aGlzIGZyb20gYSBKU09OIGxpa2UgaSdtIGRvaW5nIG5vdz8gb3Igc2hvdWxkIGkganVzdFxyXG4vLyBoYXJkLWNvZGUgaXQgaW5saW5lIChtaWdodCBiZSBtb3JlIHJlYWRhYmxlKVxyXG5pbXBvcnQgQ1JPUF9ERUZJTklUSU9OUyBmcm9tIFwiLi9jcm9wcy5qc29uXCI7XHJcblxyXG4vKiA9PT09PT09PSBDQUxDVUxBVElPTiA9PT09PT09PSAqL1xyXG5cclxudHlwZSBDcm9wRGVmaW5pdGlvbiA9IHR5cGVvZiBDUk9QX0RFRklOSVRJT05TW251bWJlcl07XHJcblxyXG5lbnVtIFNlYXNvbiB7XHJcbiAgICBTUFJJTkcsIFNVTU1FUiwgRkFMTFxyXG59XHJcblxyXG5uYW1lc3BhY2UgU2Vhc29uIHtcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBmcm9tU3RyaW5nKHM6IHN0cmluZyk6IFNlYXNvbiB7XHJcbiAgICAgICAgc3dpdGNoIChzLnRvVXBwZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgY2FzZSBcIlNQUklOR1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFNlYXNvbi5TUFJJTkc7XHJcbiAgICAgICAgICAgIGNhc2UgXCJTVU1NRVJcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBTZWFzb24uU1VNTUVSO1xyXG4gICAgICAgICAgICBjYXNlIFwiRkFMTFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFNlYXNvbi5GQUxMO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHNlYXNvbiAke3N9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG50eXBlIENyb3BEYXRhID0ge1xyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgc2Vhc29uOiBTZWFzb24sXHJcbiAgICBzZWVkX2Nvc3Q6IG51bWJlcixcclxuICAgIHNlbGxfcHJpY2U6IG51bWJlcixcclxuICAgIGRheXNfdG9fZ3JvdzogbnVtYmVyLFxyXG4gICAgcmVncm93dGhfcGVyaW9kOiBudW1iZXIgfCBudWxsLFxyXG4gICAgeWllbGQ6IG51bWJlciB8IG51bGwsXHJcbiAgICBwZXJjZW50X2NoYW5jZV9leHRyYTogbnVtYmVyIHwgbnVsbCxcclxuICAgIHVzZWZ1bF9kYXlzOiBudW1iZXIsXHJcbiAgICBudW1faGFydmVzdHM6IG51bWJlcixcclxuICAgIG51bV9jcm9wczogbnVtYmVyLFxyXG4gICAgcHJvZml0OiBudW1iZXIsXHJcbiAgICBkYWlseV9wcm9maXQ6IG51bWJlcixcclxufTtcclxuXHJcbnR5cGUgU2V0dGluZ3MgPSB7XHJcbiAgICBzdGFydF9kYXk6IG51bWJlcjtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZShjcm9wOiBDcm9wRGVmaW5pdGlvbiwgc2V0dGluZ3M6IFNldHRpbmdzKTogQ3JvcERhdGEge1xyXG4gICAgLy8gcGxhbnRpbmcgb24gZGF5IDI4IGlzIHplcm8gZGF5cyBsZWZ0XHJcbiAgICBsZXQgZGF5c19sZWZ0ID0gMjggLSBzZXR0aW5ncy5zdGFydF9kYXk7XHJcblxyXG4gICAgLy8gV2hhdCdzIHRoZSBwcm9maXQ/IERlcGVuZHMgaG93IG1hbnkgaGFydmVzdHMgd2UgY2FuIGdldCB0aGlzIHNlYXNvbi5cclxuICAgIGxldCBudW1faGFydmVzdHMgPSAwO1xyXG4gICAgbGV0IHVzZWZ1bF9kYXlzID0gMDtcclxuICAgIGlmIChkYXlzX2xlZnQgPj0gY3JvcC5kYXlzX3RvX2dyb3cpIHtcclxuICAgICAgICBudW1faGFydmVzdHMgKz0gMTtcclxuICAgICAgICB1c2VmdWxfZGF5cyArPSBjcm9wLmRheXNfdG9fZ3JvdztcclxuICAgICAgICBpZiAoY3JvcC5yZWdyb3d0aF9wZXJpb2QpIHtcclxuICAgICAgICAgICAgbGV0IGV4dHJhX2hhcnZlc3RzID0gTWF0aC5mbG9vcigoZGF5c19sZWZ0IC0gY3JvcC5kYXlzX3RvX2dyb3cpIC8gY3JvcC5yZWdyb3d0aF9wZXJpb2QpO1xyXG4gICAgICAgICAgICBudW1faGFydmVzdHMgKz0gZXh0cmFfaGFydmVzdHM7XHJcbiAgICAgICAgICAgIHVzZWZ1bF9kYXlzICs9IGV4dHJhX2hhcnZlc3RzICogY3JvcC5yZWdyb3d0aF9wZXJpb2Q7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFdlIGNhbiBzb21ldGltZXMgZ2V0IG11bHRpcGxlIGNyb3BzIHBlciBoYXJ2ZXN0XHJcbiAgICBsZXQgbnVtX2Nyb3BzID0gbnVtX2hhcnZlc3RzICogKChjcm9wLnlpZWxkID8/IDEpICsgKGNyb3AucGVyY2VudF9jaGFuY2VfZXh0cmEgPz8gMCkgLyAxMDApO1xyXG5cclxuICAgIGxldCBwcm9maXQgPSBudW1fY3JvcHMgKiBjcm9wLnNlbGxfcHJpY2UgLSBjcm9wLnNlZWRfY29zdDtcclxuICAgIGxldCBkYWlseV9wcm9maXQgPSBwcm9maXQgLyB1c2VmdWxfZGF5cztcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IGNyb3AubmFtZSxcclxuICAgICAgICBzZWFzb246IFNlYXNvbi5mcm9tU3RyaW5nKGNyb3Auc2Vhc29uKSxcclxuICAgICAgICBzZWVkX2Nvc3Q6IGNyb3Auc2VlZF9jb3N0LFxyXG4gICAgICAgIHNlbGxfcHJpY2U6IGNyb3Auc2VsbF9wcmljZSxcclxuICAgICAgICBkYXlzX3RvX2dyb3c6IGNyb3AuZGF5c190b19ncm93LFxyXG4gICAgICAgIHJlZ3Jvd3RoX3BlcmlvZDogY3JvcC5yZWdyb3d0aF9wZXJpb2QgPz8gbnVsbCxcclxuICAgICAgICB5aWVsZDogY3JvcC55aWVsZCA/PyBudWxsLFxyXG4gICAgICAgIHBlcmNlbnRfY2hhbmNlX2V4dHJhOiBjcm9wLnBlcmNlbnRfY2hhbmNlX2V4dHJhID8/IG51bGwsXHJcbiAgICAgICAgdXNlZnVsX2RheXMsXHJcbiAgICAgICAgbnVtX2hhcnZlc3RzLFxyXG4gICAgICAgIG51bV9jcm9wcyxcclxuICAgICAgICBwcm9maXQsXHJcbiAgICAgICAgZGFpbHlfcHJvZml0LFxyXG4gICAgfTtcclxufVxyXG5cclxuLyogPT09PT09PT0gR1VJID09PT09PT09ICovXHJcblxyXG4vLyBEZWZpbmVzIHRoZSBzZXQgb2YgY29sdW1ucyBmb3IgdGhlIHdob2xlIHRhYmxlLlxyXG50eXBlIENvbHVtbiA9IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGNlbGxUZXh0OiAoY3JvcDogQ3JvcERhdGEpID0+IHN0cmluZztcclxuICAgIGNvbXBhcmU6IChhOiBDcm9wRGF0YSwgYjogQ3JvcERhdGEpID0+IG51bWJlcjtcclxufTtcclxuXHJcbmNvbnN0IENPTFVNTlM6IENvbHVtbltdID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiTmFtZVwiLFxyXG4gICAgICAgIGNlbGxUZXh0OiAoY3JvcDogQ3JvcERhdGEpID0+IGNyb3AubmFtZSxcclxuICAgICAgICBjb21wYXJlOiAoYTogQ3JvcERhdGEsIGI6IENyb3BEYXRhKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIlNlYXNvblwiLFxyXG4gICAgICAgIGNlbGxUZXh0OiAoY3JvcDogQ3JvcERhdGEpID0+IFNlYXNvbltjcm9wLnNlYXNvbl0sXHJcbiAgICAgICAgY29tcGFyZTogKGE6IENyb3BEYXRhLCBiOiBDcm9wRGF0YSkgPT4gYS5zZWFzb24udmFsdWVPZigpIC0gYi5zZWFzb24udmFsdWVPZigpLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIlNlZWQgQ29zdFwiLFxyXG4gICAgICAgIGNlbGxUZXh0OiAoY3JvcDogQ3JvcERhdGEpID0+IGNyb3Auc2VlZF9jb3N0LnRvU3RyaW5nKCksXHJcbiAgICAgICAgY29tcGFyZTogKGE6IENyb3BEYXRhLCBiOiBDcm9wRGF0YSkgPT4gYS5zZWVkX2Nvc3QgLSBiLnNlZWRfY29zdCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJTZWxsIFByaWNlXCIsXHJcbiAgICAgICAgY2VsbFRleHQ6IChjcm9wOiBDcm9wRGF0YSkgPT4gY3JvcC5zZWxsX3ByaWNlLnRvU3RyaW5nKCksXHJcbiAgICAgICAgY29tcGFyZTogKGE6IENyb3BEYXRhLCBiOiBDcm9wRGF0YSkgPT4gYS5zZWxsX3ByaWNlIC0gYi5zZWxsX3ByaWNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkRheXMgdG8gR3Jvd1wiLFxyXG4gICAgICAgIGNlbGxUZXh0OiAoY3JvcDogQ3JvcERhdGEpID0+IGNyb3AuZGF5c190b19ncm93LnRvU3RyaW5nKCksXHJcbiAgICAgICAgY29tcGFyZTogKGE6IENyb3BEYXRhLCBiOiBDcm9wRGF0YSkgPT4gYS5kYXlzX3RvX2dyb3cgLSBiLmRheXNfdG9fZ3JvdyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJSZWdyb3d0aCBQZXJpb2RcIixcclxuICAgICAgICBjZWxsVGV4dDogKGNyb3A6IENyb3BEYXRhKSA9PiBjcm9wLnJlZ3Jvd3RoX3BlcmlvZD8udG9TdHJpbmcoKSA/PyBcIi1cIixcclxuICAgICAgICBjb21wYXJlOiAoYTogQ3JvcERhdGEsIGI6IENyb3BEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChiLnJlZ3Jvd3RoX3BlcmlvZCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGEucmVncm93dGhfcGVyaW9kID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYS5yZWdyb3d0aF9wZXJpb2QgLSBiLnJlZ3Jvd3RoX3BlcmlvZDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiWWllbGRcIixcclxuICAgICAgICBjZWxsVGV4dDogKGNyb3A6IENyb3BEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB5aWVsZF9udW0gPSBjcm9wLnlpZWxkID8/IDE7XHJcbiAgICAgICAgICAgIGlmIChjcm9wLnBlcmNlbnRfY2hhbmNlX2V4dHJhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7eWllbGRfbnVtfSArICR7Y3JvcC5wZXJjZW50X2NoYW5jZV9leHRyYX0lYDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZF9udW0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcGFyZTogKGE6IENyb3BEYXRhLCBiOiBDcm9wRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBzbGlnaHQgaGFjayAtLSByZXByZXNlbnQgYXMgYSArIGIvMTAwXHJcbiAgICAgICAgICAgIGxldCBhX251bSA9IChhLnlpZWxkID8/IDEpICsgKGEucGVyY2VudF9jaGFuY2VfZXh0cmEgPz8gMCkgLyAxMDA7XHJcbiAgICAgICAgICAgIGxldCBiX251bSA9IChiLnlpZWxkID8/IDEpICsgKGIucGVyY2VudF9jaGFuY2VfZXh0cmEgPz8gMCkgLyAxMDA7XHJcbiAgICAgICAgICAgIHJldHVybiBhX251bSAtIGJfbnVtO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJVc2VmdWwgRGF5c1wiLFxyXG4gICAgICAgIGNlbGxUZXh0OiAoY3JvcDogQ3JvcERhdGEpID0+IGNyb3AudXNlZnVsX2RheXMudG9TdHJpbmcoKSxcclxuICAgICAgICBjb21wYXJlOiAoYTogQ3JvcERhdGEsIGI6IENyb3BEYXRhKSA9PiBhLnVzZWZ1bF9kYXlzIC0gYi51c2VmdWxfZGF5cyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJOdW0gSGFydmVzdHNcIixcclxuICAgICAgICBjZWxsVGV4dDogKGNyb3A6IENyb3BEYXRhKSA9PiBjcm9wLm51bV9oYXJ2ZXN0cy50b1N0cmluZygpLFxyXG4gICAgICAgIGNvbXBhcmU6IChhOiBDcm9wRGF0YSwgYjogQ3JvcERhdGEpID0+IGEubnVtX2Nyb3BzIC0gYi5udW1fY3JvcHMsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiTnVtIENyb3BzXCIsXHJcbiAgICAgICAgY2VsbFRleHQ6IChjcm9wOiBDcm9wRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbnVtX2Nyb3BzID0gY3JvcC5udW1fY3JvcHM7XHJcbiAgICAgICAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKG51bV9jcm9wcykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudW1fY3JvcHMudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY3JvcC5udW1fY3JvcHMudG9GaXhlZCgyKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXBhcmU6IChhOiBDcm9wRGF0YSwgYjogQ3JvcERhdGEpID0+IGEubnVtX2Nyb3BzIC0gYi5udW1fY3JvcHMsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiUHJvZml0XCIsXHJcbiAgICAgICAgY2VsbFRleHQ6IChjcm9wOiBDcm9wRGF0YSkgPT4gY3JvcC5wcm9maXQudG9GaXhlZCgyKSxcclxuICAgICAgICBjb21wYXJlOiAoYTogQ3JvcERhdGEsIGI6IENyb3BEYXRhKSA9PiBhLnByb2ZpdCAtIGIucHJvZml0LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkRhaWx5IFByb2ZpdFwiLFxyXG4gICAgICAgIGNlbGxUZXh0OiAoY3JvcDogQ3JvcERhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZShjcm9wLmRhaWx5X3Byb2ZpdCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjcm9wLmRhaWx5X3Byb2ZpdC50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBcIi1cIjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXBhcmU6IChhOiBDcm9wRGF0YSwgYjogQ3JvcERhdGEpID0+IGEuZGFpbHlfcHJvZml0IC0gYi5kYWlseV9wcm9maXQsXHJcbiAgICB9XHJcbl07XHJcblxyXG5jbGFzcyBDcm9wUm93IHtcclxuICAgIGRhdGE6IENyb3BEYXRhO1xyXG4gICAgcm93OiBIVE1MVGFibGVSb3dFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJvdzogSFRNTFRhYmxlUm93RWxlbWVudCwgZGF0YTogQ3JvcERhdGEpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMucm93ID0gcm93O1xyXG5cclxuICAgICAgICAvLyBub3cgcG9wdWxhdGUgdGhlIHJvd1xyXG4gICAgICAgIGZvciAobGV0IGNvbCBvZiBDT0xVTU5TKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGNvbC5jZWxsVGV4dCh0aGlzLmRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLnJvdy5pbnNlcnRDZWxsKCkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbnR5cGUgU29ydERpcmVjdGlvbiA9IFwiYXNjZW5kaW5nXCIgfCBcImRlc2NlbmRpbmdcIjtcclxuZnVuY3Rpb24gZmxpcERpcmVjdGlvbih4OiBTb3J0RGlyZWN0aW9uKTogU29ydERpcmVjdGlvbiB7XHJcbiAgICBzd2l0Y2ggKHgpIHtcclxuICAgICAgICBjYXNlIFwiYXNjZW5kaW5nXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcImRlc2NlbmRpbmdcIjtcclxuICAgICAgICBjYXNlIFwiZGVzY2VuZGluZ1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJhc2NlbmRpbmdcIjtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ3JvcFRhYmxlIHtcclxuICAgIHRhYmxlOiBIVE1MVGFibGVFbGVtZW50O1xyXG4gICAgdGhlYWQ6IEhUTUxUYWJsZVNlY3Rpb25FbGVtZW50O1xyXG4gICAgdGJvZHk6IEhUTUxUYWJsZVNlY3Rpb25FbGVtZW50O1xyXG4gICAgcm93czogQ3JvcFJvd1tdO1xyXG4gICAgY3VycmVudF9zb3J0OiBbbnVtYmVyLCBTb3J0RGlyZWN0aW9uXSB8IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGFibGU6IEhUTUxUYWJsZUVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLnRhYmxlID0gdGFibGU7XHJcbiAgICAgICAgdGhpcy5yb3dzID0gW107XHJcbiAgICAgICAgdGhpcy5jdXJyZW50X3NvcnQgPSBudWxsO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGFibGUgaGVhZGVyIGFuZCBib2R5XHJcbiAgICAgICAgdGhpcy50aGVhZCA9IHRoaXMudGFibGUuY3JlYXRlVEhlYWQoKTtcclxuICAgICAgICB0aGlzLnRib2R5ID0gdGhpcy50YWJsZS5jcmVhdGVUQm9keSgpO1xyXG5cclxuICAgICAgICAvLyBQb3B1bGF0ZSBoZWFkIG9uY2UsIGhlcmVcclxuICAgICAgICBsZXQgcm93ID0gdGhpcy50aGVhZC5pbnNlcnRSb3coKTtcclxuICAgICAgICBmb3IgKGxldCBbaWR4LCBjb2xdIG9mIENPTFVNTlMuZW50cmllcygpKSB7XHJcbiAgICAgICAgICAgIGxldCBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb2wubmFtZSkpO1xyXG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFdoaWNoIHdheSBkbyB3ZSBzb3J0P1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpcjogU29ydERpcmVjdGlvbjtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRfc29ydCAhPT0gbnVsbCAmJiB0aGlzLmN1cnJlbnRfc29ydFswXSA9PT0gaWR4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlyID0gZmxpcERpcmVjdGlvbih0aGlzLmN1cnJlbnRfc29ydFsxXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpciA9IFwiYXNjZW5kaW5nXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRfc29ydCA9IFtpZHgsIGRpcl07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ2xlYXIgYWxsIHRoZSBoZWFkZXIgYnV0dG9ucywgZXhjZXB0IG91cnNlbHZlc1xyXG4gICAgICAgICAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLnRoZWFkLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RkJyk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBoZWFkZXIgb2YgaGVhZGVycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlci5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLXNvcnRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzW2lkeF0uc2V0QXR0cmlidXRlKFwiYXJpYS1zb3J0XCIsIGRpcik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gTm93IHNvcnQgdGhlIHJvd3NcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ydFJvd3MoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBXZSdsbCBsZWF2ZSB0aGUgYm9keSBlbXB0eSBiZWNhdXNlIGl0J2xsIGJlIHJlY29tcHV0ZWQgZnJvbVxyXG4gICAgICAgIC8vIHJlcG9wdWxhdGVUYWJsZSgpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gVE9ETzogZG9uJ3QgcmVjcmVhdGUgcm93czsgY2hhbmdlIHRoZSB0ZXh0IGluc3RlYWRcclxuICAgIHB1YmxpYyByZXBvcHVsYXRlVGFibGUoc2V0dGluZ3M6IFNldHRpbmdzKSB7XHJcbiAgICAgICAgLy8gRGlzY2FyZCB0aGUgb2xkIHJvd3MgYW5kIGNyZWF0ZSBuZXcgb25lc1xyXG4gICAgICAgIHRoaXMudGJvZHkucmVwbGFjZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgdGhpcy5yb3dzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgZGVmIG9mIENST1BfREVGSU5JVElPTlMpIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBjYWxjdWxhdGUoZGVmLCBzZXR0aW5ncyk7XHJcbiAgICAgICAgICAgIGxldCByb3cgPSB0aGlzLnRib2R5Lmluc2VydFJvdygpO1xyXG4gICAgICAgICAgICB0aGlzLnJvd3MucHVzaChuZXcgQ3JvcFJvdyhyb3csIGRhdGEpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byByZS1zb3J0IHRoZW0uIFxyXG4gICAgICAgIHRoaXMuc29ydFJvd3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNvcnRSb3dzKCkge1xyXG4gICAgICAgIC8vIElmIG5vIHNvcnQgc2VsZWN0ZWQsIGRvbid0IHNvcnQuIEVaLlxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRfc29ydCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBXZSBmaXJzdCBzb3J0IG91ciBvd24gY29sbGVjdGlvbiwgdGhlbiB1c2UgdGhhdCB0byByZS1pbnNlcnRcclxuICAgICAgICAvLyBvdXIgcm93IGVsZW1lbnRzLlxyXG4gICAgICAgIGxldCBbaWR4LCBkaXJdID0gdGhpcy5jdXJyZW50X3NvcnQ7XHJcbiAgICAgICAgbGV0IGNvbCA9IENPTFVNTlNbaWR4XTtcclxuICAgICAgICB0aGlzLnJvd3Muc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY29tcGFyZSA9IGNvbC5jb21wYXJlKGEuZGF0YSwgYi5kYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRpciA9PT0gXCJhc2NlbmRpbmdcIiA/IGNvbXBhcmUgOiAtY29tcGFyZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gVGhlbiB1c2UgdGhhdCB0byByZWFycmFuZ2UgdGhlIG5vZGVzIGluIHRoZSBib2R5XHJcbiAgICAgICAgZm9yIChsZXQgcm93IG9mIHRoaXMucm93cykge1xyXG4gICAgICAgICAgICB0aGlzLnRib2R5LmFwcGVuZENoaWxkKHJvdy5yb3cpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiSW5pdGlhbGl6aW5nIVwiKTtcclxuXHJcbiAgICAvLyBGaW5kIGFsbCB0aGUgZWxlbWVudHMgSSBuZWVkXHJcbiAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyb3AtdGFibGVcIik7XHJcbiAgICBpZiAoISh0YWJsZSBpbnN0YW5jZW9mIEhUTUxUYWJsZUVsZW1lbnQpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY3JvcC10YWJsZSBzaG91bGQgYmUgYSA8dGFibGU+XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpbnB1dF9wYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtcGFuZWxcIikhO1xyXG4gICAgbGV0IGN1cnJlbnRfZGF5X2lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiNkYXlcIikhO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFNldHRpbmdzKCk6IFNldHRpbmdzIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdGFydF9kYXk6IGN1cnJlbnRfZGF5X2lucHV0LnZhbHVlQXNOdW1iZXJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZSB0YWJsZSBhbmQgcG9wdWxhdGUgaXQgd2l0aCB0aGUgKGRlZmF1bHQpIHNldHRpbmdzXHJcbiAgICBsZXQgdGFibGVfY29tcG9uZW50ID0gbmV3IENyb3BUYWJsZSh0YWJsZSk7XHJcbiAgICB0YWJsZV9jb21wb25lbnQucmVwb3B1bGF0ZVRhYmxlKGdldFNldHRpbmdzKCkpO1xyXG5cclxuICAgIC8vIEF0dGFjaCBldmVudCBsaXN0ZW5lcnNcclxuICAgIGlucHV0X3BhbmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGFibGVfY29tcG9uZW50LnJlcG9wdWxhdGVUYWJsZShnZXRTZXR0aW5ncygpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuLy8gQWxyaWdodHksIHdlJ3JlIHJlYWR5IHRvIGdvISBXYWl0IGZvciB0aGUgRE9NIHRvIGZpbmlzaCBsb2FkaW5nIChvciBzZWUgaWYgaXRcclxuLy8gYWxyZWFkeSBoYXMuXHJcbmlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImxvYWRpbmdcIikge1xyXG4gICAgLy8gTG9hZGluZyBoYXNuJ3QgZmluaXNoZWQgeWV0XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0aWFsaXplKTtcclxufSBlbHNlIHtcclxuICAgIC8vIGBET01Db250ZW50TG9hZGVkYCBoYXMgYWxyZWFkeSBmaXJlZFxyXG4gICAgaW5pdGlhbGl6ZSgpO1xyXG59Il0sIm5hbWVzIjpbIlNlYXNvbiIsImNhbGN1bGF0ZSIsImNyb3AiLCJzZXR0aW5ncyIsImRheXNfbGVmdCIsInN0YXJ0X2RheSIsIm51bV9oYXJ2ZXN0cyIsInVzZWZ1bF9kYXlzIiwiZGF5c190b19ncm93IiwicmVncm93dGhfcGVyaW9kIiwiZXh0cmFfaGFydmVzdHMiLCJNYXRoIiwiZmxvb3IiLCJudW1fY3JvcHMiLCJ5aWVsZCIsInBlcmNlbnRfY2hhbmNlX2V4dHJhIiwicHJvZml0Iiwic2VsbF9wcmljZSIsInNlZWRfY29zdCIsImRhaWx5X3Byb2ZpdCIsIm5hbWUiLCJzZWFzb24iLCJmcm9tU3RyaW5nIiwicyIsInRvVXBwZXJDYXNlIiwiU1BSSU5HIiwiU1VNTUVSIiwiRkFMTCIsIkVycm9yIiwiQ09MVU1OUyIsImNlbGxUZXh0IiwiY29tcGFyZSIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsInZhbHVlT2YiLCJ0b1N0cmluZyIsInlpZWxkX251bSIsIk51bWJlciIsImlzSW50ZWdlciIsInRvRml4ZWQiLCJpc0Zpbml0ZSIsIkNyb3BSb3ciLCJjb25zdHJ1Y3RvciIsInJvdyIsImRhdGEiLCJ0aGlzIiwiY29sIiwidmFsdWUiLCJpbnNlcnRDZWxsIiwiYXBwZW5kQ2hpbGQiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiZmxpcERpcmVjdGlvbiIsIngiLCJDcm9wVGFibGUiLCJ0YWJsZSIsInJvd3MiLCJjdXJyZW50X3NvcnQiLCJ0aGVhZCIsImNyZWF0ZVRIZWFkIiwidGJvZHkiLCJjcmVhdGVUQm9keSIsImluc2VydFJvdyIsImlkeCIsImVudHJpZXMiLCJjZWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiZGlyIiwiaGVhZGVycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJoZWFkZXIiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwic29ydFJvd3MiLCJyZXBvcHVsYXRlVGFibGUiLCJyZXBsYWNlQ2hpbGRyZW4iLCJkZWYiLCJwdXNoIiwic29ydCIsImluaXRpYWxpemUiLCJnZXRFbGVtZW50QnlJZCIsIkhUTUxUYWJsZUVsZW1lbnQiLCJpbnB1dF9wYW5lbCIsImN1cnJlbnRfZGF5X2lucHV0IiwicXVlcnlTZWxlY3RvciIsImdldFNldHRpbmdzIiwidmFsdWVBc051bWJlciIsInRhYmxlX2NvbXBvbmVudCIsInJlYWR5U3RhdGUiXSwic291cmNlUm9vdCI6IiJ9