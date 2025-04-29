import { createMerchant, getMerchantsByUser } from '../services/merchantService';

export async function createNewMerchant(req: any, res: any) {
    const { name } = req.body;
    const userId = req.user?.id;
  
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized: user ID not found' });
    }
  
    try {
      const merchant = await createMerchant(userId, name);
      res.status(201).json(merchant);
    } catch (error) {
      res.status(400).json({ message: 'Gagal membuat merchant', error });
    }
}
  
export async function getUserMerchants(req: any, res: any) {
    const userId = req.user?.id;

    if (!userId) {
        return res.status(401).json({ message: 'Unauthorized: user ID not found' });
    }

    try {
        const merchants = await getMerchantsByUser(userId);
        res.status(200).json(merchants);
    } catch (error) {
        res.status(400).json({ message: 'Gagal mengambil merchant', error });
    }
}
