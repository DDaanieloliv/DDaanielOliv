public class Main {
    public static void main(String[] args) {
        // Criar instâncias do Modelo, Visualização e Controlador
        RLEModel model = new RLEModel();
        RLEView view = new RLEView();
        RLEController controller = new RLEController(model, view);

        // Dados de exemplo
        String originalData = "CCCCEEERRRR";
        
        // Comprimir dados usando o Controlador
        controller.compressData(originalData);
    }
}