import javafx.application.Application;
import javafx.stage.Stage;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.layout.BorderPane;
import javafx.scene.control.Button;
import javafx.scene.control.TextField;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.animation.*;
import javafx.util.Duration;

public class FxTest extends Application{
	
	Label lb;
	TextField tf;
	Button bt;
	
	public static void main(String[] args){
		launch(args);
	}

	@Override
	public void start(Stage stage)throws Exception{
		lb = new Label("Hello PHP!");
		tf = new TextField();
		bt = new Button("Dont push it");
		BorderPane pane = new BorderPane();
		pane.setTop(lb);
		pane.setCenter(tf);
		pane.setBottom(bt);
		createShape(pane);
		bt.setOnAction((ActionEvent)->{
			lb.setText("i said dont push.... "+tf.getText());
			tf.setText("");
		});
		Scene scene = new Scene(pane,320,240);
		stage.setScene(scene);
		stage.show();
	}
	

 
public void createShape(Pane root){
    Rectangle r = new Rectangle(20, 20, 50, 50);
    r.setFill(Color.CYAN);
    root.getChildren().add(r);
    new TranslateTransition();
     
    TranslateTransition tt = new TranslateTransition(new Duration(1000), r);
    tt.setFromX(20);
    tt.setToX(100);
    tt.setAutoReverse(true);
    tt.setCycleCount(10);
    tt.play();
}
}