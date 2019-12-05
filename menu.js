(function(){
    const menu = document.getElementById('dropMenu');

    const prefix = "port-graph/";

    const GRAPHS = {
        "DFS": "dfs/index.js"
    }

    const drop = document.createElement('li');
    drop.classList = "nav-item dropdown";

    const nameDrop = document.createElement('a');
    nameDrop.classList = "nav-link dropdown-toggle";
    nameDrop.href = "javascript:void(0);";
    nameDrop.id = "navbarDropdown";
    nameDrop.setAttribute("role", "button");
    nameDrop.setAttribute("data-toggle", "dropdown");
    nameDrop.setAttribute("aria-haspopup", "true");
    nameDrop.setAttribute("aria-expanded", "false");
    nameDrop.innerHTML = "Graphs";

    const dropMenu = document.createElement('div');
    dropMenu.className = "dropdown-menu";
    dropMenu["aria-labelledby"] = "navbarDropdown";

    const gkeys = Object.keys(GRAPHS);
    gkeys.map(key =>{
        const item = document.createElement('a');
        item.className = "dropdown-item";
        item.href = "javascript:void(0);";
        item.setAttribute("onclick", `goTo("${prefix+GRAPHS[key]}")`);
        item.innerHTML = key;

        dropMenu.appendChild(item);
    });

    drop.appendChild(nameDrop);
    drop.appendChild(dropMenu);

    menu.appendChild(drop);
})();