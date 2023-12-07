public class RLEController {
    private RLEModel model;
    private RLEView view;

    public RLEController(RLEModel model, RLEView view) {
        this.model = model;
        this.view = view;
    }

    public void compressData(String data) {
        String compressedData = model.compress(data);
        view.displayCompressedData(compressedData);
    }
}