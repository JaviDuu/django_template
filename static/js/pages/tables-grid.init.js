document.getElementById("basic_tables")&&new gridjs.Grid({columns:["Name","Email","Phone Number"],data:[["John","john@example.com","(353) 01 222 3333"],["Mark","mark@gmail.com","(01) 22 888 4444"],["Eoin","eoin@gmail.com","0097 22 654 00033"],["Sarah","sarahcdd@gmail.com","+322 876 1233"],["Afshin","afshin@mail.com","(353) 22 87 8356"]]}).render(document.getElementById("basic_tables")),document.getElementById("pagination_tables")&&new gridjs.Grid({columns:["Name","Email","Phone Number"],pagination:!0,pagination:{limit:3},data:[["John","john@example.com","(353) 01 222 3333"],["Mark","mark@gmail.com","(01) 22 888 4444"],["Eoin","eoin@gmail.com","0097 22 654 00033"],["Sarah","sarahcdd@gmail.com","+322 876 1233"],["Sarah","sarahcdd@gmail.com","+322 876 1233"],["Sarah","sarahcdd@gmail.com","+322 876 1233"],["Sarah","sarahcdd@gmail.com","+322 876 1233"],["Sarah","sarahcdd@gmail.com","+322 876 1233"],["Sarah","sarahcdd@gmail.com","+322 876 1233"],["Sarah","sarahcdd@gmail.com","+322 876 1233"],["Sarah","sarahcdd@gmail.com","+322 876 1233"],["Afshin","afshin@mail.com","(353) 22 87 8356"]]}).render(document.getElementById("pagination_tables")),document.getElementById("search_tables")&&new gridjs.Grid({columns:["Name","Email","Phone Number"],search:!0,data:[["John","john@example.com","(353) 01 222 3333"],["Mark","mark@gmail.com","(01) 22 888 4444"],["Eoin","eoin@gmail.com","0097 22 654 00033"],["Sarah","sarahcdd@gmail.com","+322 876 1233"],["Sarah","sarahcdd@gmail.com","+322 876 1233"],["Afshin","afshin@mail.com","(353) 22 87 8356"]]}).render(document.getElementById("search_tables")),document.getElementById("table_sorting")&&new gridjs.Grid({columns:[{name:"Name",width:"150px"},{name:"Email",width:"250px"},{name:"Position",width:"250px"},{name:"Company",width:"250px"},{name:"Country",width:"150px"}],pagination:{limit:5},sort:!0,data:[["Jonathan","jonathan@example.com","Senior Implementation Architect","Hauck Inc","Holy See"],["Harold","harold@example.com","Forward Creative Coordinator","Metz Inc","Iran"],["Shannon","shannon@example.com","Legacy Functionality Associate","Zemlak Group","South Georgia"],["Robert","robert@example.com","Product Accounts Technician","Hoeger","San Marino"],["Noel","noel@example.com","Customer Data Director","Howell - Rippin","Germany"],["Traci","traci@example.com","Corporate Identity Director","Koelpin - Goldner","Vanuatu"],["Kerry","kerry@example.com","Lead Applications Associate","Feeney, Langworth and Tremblay","Niger"],["Patsy","patsy@example.com","Dynamic Assurance Director","Streich Group","Niue"],["Cathy","cathy@example.com","Customer Data Director","Ebert, Schamberger and Johnston","Mexico"],["Tyrone","tyrone@example.com","Senior Response Liaison","Raynor, Rolfson and Daugherty","Qatar"]]}).render(document.getElementById("table_sorting")),document.getElementById("resizable_columns")&&new gridjs.Grid({columns:["Name","Email","Phone Number"],data:[["John","john@example.com","(353) 01 222 3333"],["Mark","mark@gmail.com","(01) 22 888 4444"]],sort:!0,resizable:!0}).render(document.getElementById("resizable_columns")),document.getElementById("table_loading_state")&&new gridjs.Grid({columns:[{name:"Name",width:"150px"},{name:"Email",width:"250px"},{name:"Position",width:"250px"},{name:"Company",width:"250px"},{name:"Country",width:"150px"}],pagination:{limit:5},sort:!0,data:function(){return new Promise((function(e){setTimeout((function(){e([["Jonathan","jonathan@example.com","Senior Implementation Architect","Hauck Inc","Holy See"],["Harold","harold@example.com","Forward Creative Coordinator","Metz Inc","Iran"],["Shannon","shannon@example.com","Legacy Functionality Associate","Zemlak Group","South Georgia"],["Robert","robert@example.com","Product Accounts Technician","Hoeger","San Marino"],["Noel","noel@example.com","Customer Data Director","Howell - Rippin","Germany"],["Traci","traci@example.com","Corporate Identity Director","Koelpin - Goldner","Vanuatu"],["Kerry","kerry@example.com","Lead Applications Associate","Feeney, Langworth and Tremblay","Niger"],["Patsy","patsy@example.com","Dynamic Assurance Director","Streich Group","Niue"],["Cathy","cathy@example.com","Customer Data Director","Ebert, Schamberger and Johnston","Mexico"],["Tyrone","tyrone@example.com","Senior Response Liaison","Raynor, Rolfson and Daugherty","Qatar"]])}),2e3)}))}}).render(document.getElementById("table_loading_state")),document.getElementById("table_fixed_header")&&new gridjs.Grid({columns:[{name:"Name",width:"150px"},{name:"Email",width:"250px"},{name:"Position",width:"250px"},{name:"Company",width:"250px"},{name:"Country",width:"150px"}],sort:!0,pagination:!0,fixedHeader:!0,height:"400px",data:[["Jonathan","jonathan@example.com","Senior Implementation Architect","Hauck Inc","Holy See"],["Harold","harold@example.com","Forward Creative Coordinator","Metz Inc","Iran"],["Shannon","shannon@example.com","Legacy Functionality Associate","Zemlak Group","South Georgia"],["Robert","robert@example.com","Product Accounts Technician","Hoeger","San Marino"],["Noel","noel@example.com","Customer Data Director","Howell - Rippin","Germany"],["Traci","traci@example.com","Corporate Identity Director","Koelpin - Goldner","Vanuatu"],["Kerry","kerry@example.com","Lead Applications Associate","Feeney, Langworth and Tremblay","Niger"],["Patsy","patsy@example.com","Dynamic Assurance Director","Streich Group","Niue"],["Cathy","cathy@example.com","Customer Data Director","Ebert, Schamberger and Johnston","Mexico"],["Tyrone","tyrone@example.com","Senior Response Liaison","Raynor, Rolfson and Daugherty","Qatar"]]}).render(document.getElementById("table_fixed_header")),document.getElementById("table_hidden_column")&&new gridjs.Grid({columns:[{name:"Name",width:"120px"},{name:"Email",width:"250px"},{name:"Position",width:"250px"},{name:"Company",width:"250px"},{name:"Country",hidden:!0}],pagination:{limit:5},sort:!0,data:[["Jonathan","jonathan@example.com","Senior Implementation Architect","Hauck Inc","Holy See"],["Harold","harold@example.com","Forward Creative Coordinator","Metz Inc","Iran"],["Shannon","shannon@example.com","Legacy Functionality Associate","Zemlak Group","South Georgia"],["Robert","robert@example.com","Product Accounts Technician","Hoeger","San Marino"],["Noel","noel@example.com","Customer Data Director","Howell - Rippin","Germany"],["Traci","traci@example.com","Corporate Identity Director","Koelpin - Goldner","Vanuatu"],["Kerry","kerry@example.com","Lead Applications Associate","Feeney, Langworth and Tremblay","Niger"],["Patsy","patsy@example.com","Dynamic Assurance Director","Streich Group","Niue"],["Cathy","cathy@example.com","Customer Data Director","Ebert, Schamberger and Johnston","Mexico"],["Tyrone","tyrone@example.com","Senior Response Liaison","Raynor, Rolfson and Daugherty","Qatar"]]}).render(document.getElementById("table_hidden_column")),document.getElementById("cell_formatting")&&new gridjs.Grid({columns:["Salary 1","Salary 2",{name:"Sum",data:null,formatter:(e,a)=>`$${(a.cells[0].data+a.cells[1].data).toLocaleString()} USD`}],data:Array(5).fill().map((e=>[Math.round(1e5*Math.random()),Math.round(1e5*Math.random())]))}).render(document.getElementById("cell_formatting"));