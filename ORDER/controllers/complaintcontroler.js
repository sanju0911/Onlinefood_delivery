const Complaint = require("../models/complaint"); // Correctly name your model

exports.complaint = async (req, res) => {
  const { email } = req.body;

  try {
    // Check if a complaint from the given email already exists
    const found = await Complaint.findOne({ email });
    if (found) {
      return res
        .status(400)
        .json({
          message:
            "You have already submitted a complaint. We will reach you again shortly.",
        });
    }

    // Create a new complaint
    const newComplaint = new Complaint({
      email,
      createdAt: new Date(),
    
    });

    // Save the new complaint
    const savedComplaint = await newComplaint.save();

    // Respond with success message
    return res.status(201).json({
      message: "Complaint submitted successfully.",
      complaint: savedComplaint,
    });
  } catch (error) {
    // Handle any errors
    console.error("Error processing complaint:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
