import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";


// For updating the user 
export const updateUser = async (req, res) => {
  const nid = req.params.id;
  const tokenUserId = req.userId;
  const { password, avatar, ...inputs } = req.body;
  
// checking the id and tokenUserid are same or not 
  if (nid !== tokenUserId) {
    return res.status(403).json({ message: "Not Authorized!" });
  }
  const id = parseInt(nid); 
  let updatedPassword = null;
  try {
    if (password) {
      updatedPassword = await bcrypt.hash(password, 10);
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        ...inputs,
        ...(updatedPassword && { password: updatedPassword }),
        ...(avatar && { avatar }),
      },
    });

    const { password: userPassword, ...rest } = updatedUser;

    res.status(200).json(rest);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to update users!" });
  }
};

