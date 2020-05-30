export class IpUtil {
    static verifyIp(ip: string): boolean {
        // check correct structure
        const ipSplit = ip.split('.');
        if (ipSplit.length !== 4) {
            return false;
        }

        // check four blocks are able to be converted to int
        const ipBlocks: number[] = [0, 0, 0, 0];

        for (let i = 0; i < 4; i++) {
            // check if split string can be converted to int
            try {
                ipBlocks[i] = parseInt(ipSplit[i], 10);

                // check if block is between 0 and 255
                if (ipBlocks[i] < 0 || ipBlocks[i] > 255) {
                    return false;
                }
            } catch (FormatException) {
                return false;
            }
        }
        return true;
    }
}
