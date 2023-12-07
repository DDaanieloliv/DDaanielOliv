public class RLEModel {
    public String compress(String data) {
        StringBuilder compressedData = new StringBuilder();
        int count = 1;
        int n = data.length();

        for (int i = 1; i <= n; i++) {
            if (i == n || data.charAt(i) != data.charAt(i - 1)) {
                compressedData.append(count).append(data.charAt(i - 1));
                count = 1;
            } else {
                count++;
            }
        }

        return compressedData.toString();
    }
}