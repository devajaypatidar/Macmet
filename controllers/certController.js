const Intern = require('../models/intern');

const certController = {
  checkCertificate: async (req, res) => {
    try {
      const certificateNumber = req.body.certificateNumber;
      const emailAddress = req.body.emailAddress;

      // Check if the certificate exists in the database
      const intern = await Intern.findOne({
        $or: [
          { certificateNumber: certificateNumber },
          { emailAddress: emailAddress },
        ],
      });

      if (intern) {
        // Certificate found, render success.ejs with intern data
        res.render('success', { intern });
      } else {
        // Certificate not found, render notfound.ejs
        res.render('certNotFound');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  addCertification: async (req, res) => {
    try {
      // Extract certification data from the request body
      const {
        name,
        position,
        dateOfJoining,
        dateOfCompletion,
        certificateNumber,
        emailAddress,
      } = req.body;

      // Create a new Intern document in the database
      const newIntern = new Intern({
        name,
        position,
        dateOfJoining,
        dateOfCompletion,
        certificateNumber,
        emailAddress,
      });

      // Save the new intern document to the database
      await newIntern.save();

      // Redirect to a success page or another relevant page
      res.send("certificate added successfully. Thanks you");
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  addingCertificate: async(req,res)=>{
    try{
      res.render('addingcertificate');
    }catch(err){
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
  }
};

module.exports = certController;
