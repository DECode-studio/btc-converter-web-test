export const normalizePhoneNumber = (input: string): string => {
    // Hapus semua karakter selain angka
    let cleaned = input.replace(/\D/g, '');

    // Hilangkan awalan +62 atau 62 dan ubah ke 08
    if (cleaned.startsWith('62')) {
        cleaned = '0' + cleaned.slice(2);
    } else if (cleaned.startsWith('8')) {
        cleaned = '0' + cleaned;
    } else if (cleaned.startsWith('0')) {
        // do nothing
    } else {
        // Bila awalan tidak dikenali, kembalikan seperti semula
        return input;
    }

    return cleaned;
}
