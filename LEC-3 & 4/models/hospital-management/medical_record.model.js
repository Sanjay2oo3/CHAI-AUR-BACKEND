import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    patientId : {
        type : String,
        required : true
    },
    doctorId : {
        type : String,
        required : true
    },
    hospitalId : {
        type : String,
        required : true
    },
    disease : {
        type : String,
        required : true
    },
    prescription : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : true
    }
},{timestamps : true});

export const MedicalRecord = mongoose.model("MedicalRecord",medicalRecordSchema);