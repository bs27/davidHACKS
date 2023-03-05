from ultralytics import YOLO

# Can use CLI below in terminal/command prompt to achieve the same results:
    # yolo task=detect mode=train epochs=100 data=data_custom.yaml model=yolov8n.pt imgsz=640 batch=8

def trainModel():
    # Load a model
    model = YOLO("yolov8n.pt") # load pretrained model

    # Can use backslash instead of double forward slash: e.g. below
    # "C:/Users/bjsot/OneDrive/Desktop/yolov8_custom/data_custom.yaml"
    model.train(data="C:\\Users\\bjsot\\OneDrive\\Desktop\\yolov8_custom\\data_custom.yaml.txt", epochs=1, imgsz=640)

def predictModel():
    # Load a model
    model = YOLO("yolov8n_custom.pt")  # build custom model

    # source=Direct path for specific image, source=0 for webcam, source=2 for video
    results = model.predict(source="C:/Users/bjsot/PycharmProjects/davidHACKS/vpants1.jpg", show=True, save=True,
                            save_txt=True, conf=.00431, line_thickness=2, hide_labels=False)

    results.show(labels=True)

# Returns list of labeled clothes
def getLabels(txtFilepath):
    # Classes available from dataset in this order
    arr = ["jacket", "pants", "shoes"]
    lst = []
    data = open(txtFilepath, "r")
    for row in data[data.len()][0]:
        clothingLabel = data[row][0]
        if clothingLabel.__eq__("0") and "jacket" not in lst:
            lst.append("jacket")
        elif clothingLabel.__eq__("1") and "pants" not in lst:
            lst.append("pants")
        elif clothingLabel.__eq__("2") and "shoes" not in lst:
            lst.append("shoes")
        else:
            continue
    return lst



