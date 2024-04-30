const NFTs = []


function mintNFT (name,eyecolor,age,gender) {
    const NFT = {
        "name": name,
        "eyecolor": eyecolor,
        "age": age,
        "gender": gender,
    }
    NFTs.push(NFT);
    console.log("Minted: " + name);

}

function listNFTs(){    
    for(let i=0; i < NFTs.length; i++){
        console.log("\nID: " + (i + 1));
        console.log("Name: " + NFTs[i].name);
        console.log("EyeColor: " + NFTs[i].eyecolor);
        console.log("Age: " + NFTs[i].age);
        console.log("Gender: " + NFTs[i].gender);
        
    }
}

function getTotalSupply(){
    console.log("\n" + NFTs.length);
}

mintNFT("Deanna", "Black","19", "Female");
mintNFT("Ethan", "Black","12", "Male");
mintNFT("Max", "Black","11", "Female");
mintNFT("Gavin", "Black","9", "Male");
mintNFT("CJ", "Black","2", "Male");
listNFTs();
getTotalSupply();
