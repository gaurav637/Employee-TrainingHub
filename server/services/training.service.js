const {Training} = require('../models');

module.exports.createNewTraining = async (reqBody) => {
    try{
        const newTraining = new Training(reqBody);
        newTraining.save();
        return newTraining;
    }catch(error){
        console.log("Failed to create new training");
        throw new Error("Failed to create new training");
    }
}

module.exports.getAllTraining = async ()=> {
    try{
        const allTraining = await Training.find();
        if(!allTraining){
            throw new Error("Training is not available!");
        }
        return allTraining;
    }catch(error){
        throw new Error(error.message);
    }
}

module.exports.serachTraining = async (searchKey)=> {
    try{
        if(searchKey && searchKey!=""){
            const training = 
                            searchKey && searchKey!=""
                            ?{
                                $or: [
                                    {
                                        title: {$regex: searchKey, $options: "i"}
                                    },
                                    {
                                        description: {$regex: searchKey, $options: "i"}
                                    }
                                ]
                            }:{};
        }
    }catch(error){
        throw new Error(error.message);
    }
}