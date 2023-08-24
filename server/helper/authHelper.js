import bcrypt from 'bcrypt';

export const hashPassword = async (normalPassword) => {
      try {
        const hashedPassword = await bcrypt.hash(normalPassword,12);
        return hashedPassword;
        
      } catch (error) {
         console.log(error);
      }
}


export const comparePassword = async (plainPassword,hashedPassword) => {
    return bcrypt.compare(plainPassword,hashedPassword);
}