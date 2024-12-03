import bcrypt from "bcryptjs";

export const gerarHash = async (senha: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(senha, salt);
  return hash;
};

export const verificarHash = async (
  senha: string,
  hash: string,
): Promise<boolean> => {
  const comparacao = await bcrypt.compare(senha, hash);
  return comparacao;
};
