import { prisma } from "../../db";

//*GET
export const getEquipo = async (req, res) => {
  try {
    const result = await prisma.equipoDeTrabajo.findMany();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
