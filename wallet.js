window.userAddress = null;
window.richAddress = null;
window.richPrivatekey = null;
window.onload = async () => {

    if (!window.ethereum){

        alert("You need install the MetaMask Wallet !");
    }
        window.userAddress = window.localStorage.getItem("userAddress");
    if (!window.userAddress){
        return false;
    }
        document.getElementById("login_mode_b_address").textContent = `${truncateAddress(window.userAddress)}`;  
}

async function walletLogin_mode_a(){ 
    if (window.ethereum){
        const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
        const account = accounts[0];
        document.getElementById("login_mode_a_address").textContent = account;
    } else{
        alert("No Web3's wallet extension detected.");
    } 
}

async function walletLogout_mode_a() { 
    alert("Bye bye~~");
    document.getElementById( "login_mode_a_address" ).textContent = "";
  //  document.getElementById( "userBalance" ).value = "";
}

async function walletLogin_mode_b(){ 
    if (window.ethereum){
        const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
        const account = accounts[0];
        window.userAddress = account;
        window.localStorage.setItem("userAddress",truncateAddress(account));
        document.getElementById("login_mode_b_address").textContent = `${truncateAddress(window.userAddress)}`;
    } else{
        alert("No Web3's wallet extension detected.");
    }
}

async function walletLogout_mode_b() { 
    alert("Bye bye~~");
    window.userAddress = null; 
    window.localStorage.removeItem("userAddress");
    document.getElementById( "login_mode_b_address" ).textContent = "";
  //  document.getElementById( "userBalance" ).value = "";
}

function truncateAddress(address) {
    if (!address) {
      return "";
    }
    return `${address.substr(0, 5)}...${address.substr(
      address.length - 5,
      address.length
    )}`;
}

async function walletLogin_mode_c(){ 
    if (window.ethereum){
        const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
        const account = accounts[0];
        document.getElementById("login_mode_c_address").textContent = account;
    } else{
        alert("No Web3's wallet extension detected.");
    } 
}

async function walletLogout_mode_c() { 
    alert("Bye bye~~");
    document.getElementById( "login_mode_c_address" ).textContent = "";
  //  document.getElementById( "userBalance" ).value = "";
}

async function walletLogin_mode_d(){ 
    if (window.ethereum){
        const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
        const account = accounts[0];
        document.getElementById("login_mode_d_address").textContent = account;
    } else{
        alert("No Web3's wallet extension detected.");
    } 
}

async function walletLogout_mode_d() { 
    alert("Bye bye~~");
    document.getElementById( "login_mode_c_address" ).textContent = "";
  //  document.getElementById( "userBalance" ).value = "";
}