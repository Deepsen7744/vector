const express = require("express")
const router = express.Router();

// goverment
const {
    createGov,
    GetAllNotRegisteredInstitute,
    GetAllRegisteredInstitute,
    approveInstitute
} = require("../controllers/Goverment");

// institute
const {
    signup,
    updateDisplayPicture,
    GetAllNotApprovedApplications,
    GetAllApprovedApplications,
    approveCertificate
} = require("../controllers/Institute");

// student
const {
    signupStudent,
    updateDisplayPictureStudent,
    CertificateApplication,
    GetAllCertificates
} = require("../controllers/Student");

const { 
    isGoverment,
    isStudent,
    isInstitute,
    auth
} = require("../middlewares/auth");

// Authorization
router.post("/auth",auth)

// goverment routes
router.post("/goverment-signup",createGov)
router.get("/institute-applications",isGoverment,GetAllNotRegisteredInstitute)
router.get("/approved-institute",isGoverment,GetAllRegisteredInstitute)
router.put("/approve-institute",isGoverment,approveInstitute)

// insitute routes
router.post("/institute-signup",signup)
router.put("/updateDisplayPicture-institute",isInstitute,updateDisplayPicture)
router.get("/get-student-application",isInstitute,GetAllNotApprovedApplications)
router.get("/get-approved-student",isInstitute,GetAllApprovedApplications)
router.put("/approve-certificate",isInstitute,approveCertificate)

// stuident routes
router.post("/student-signup",signupStudent)
router.put("/updateDisplayPicture-student",isStudent,updateDisplayPictureStudent)
router.post("/certificate-application",isStudent,CertificateApplication)
router.get("/get-all-certificate",isStudent,GetAllCertificates)

module.exports = router