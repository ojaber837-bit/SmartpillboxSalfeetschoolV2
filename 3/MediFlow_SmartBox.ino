#include <SoftwareSerial.h>

const int devicePin = 10; // LED and Buzzer
const int buttonPin = 2;  // The Button (Connect to GND)

// Bluetooth on pins 8 and 9 (Uno Best Practice)
SoftwareSerial bluetooth(8, 9); 

bool isAlarmActive = false;
unsigned long alarmStartTime = 0;
bool messageSent = false; 

void setup() {
  Serial.begin(9600);      // USB Connection (Connect direct to website via cable)
  bluetooth.begin(9600);   // Bluetooth Connection (HC-05)
  
  pinMode(devicePin, OUTPUT);
  pinMode(buttonPin, INPUT_PULLUP); 
  digitalWrite(devicePin, LOW); 
  
  Serial.println("MediFlow: USB Control Ready");
  bluetooth.println("MediFlow: Bluetooth Ready");
}

void loop() {
  // Check for commands from USB CABLE
  if (Serial.available()) {
    handleCommand(Serial.readStringUntil('\n'));
  }

  // Check for commands from BLUETOOTH
  if (bluetooth.available()) {
    handleCommand(bluetooth.readStringUntil('\n'));
  }

  // Alarm Logic
  if (isAlarmActive) {
    unsigned long elapsedTime = millis() - alarmStartTime;

    if (digitalRead(buttonPin) == LOW) { 
      notifyWebsite("Medicine was taken"); 
      stopAlarm();
      return;
    }

    if (elapsedTime >= 19500 && !messageSent) {
      notifyWebsite("Medicine was not taken");
      messageSent = true; 
    }

    if (elapsedTime > 20000) { 
      stopAlarm();
      return;
    }

    digitalWrite(devicePin, HIGH);   
    delay(135);              
    digitalWrite(devicePin, LOW);    
    delay(135);              
  }
}

void handleCommand(String command) {
  command.trim();
  if (command == "ALARM_ON") {
    isAlarmActive = true;
    alarmStartTime = millis();
    messageSent = false;
    notifyWebsite("STATUS: Alarm Activated");
  } else if (command == "ALARM_OFF") {
    stopAlarm();
  }
}

void notifyWebsite(String msg) {
  Serial.println(msg);    // Send to Website via USB
  bluetooth.println(msg); // Send to Website via Bluetooth
}

void stopAlarm() {
  isAlarmActive = false;
  digitalWrite(devicePin, LOW); 
  notifyWebsite("STATUS: Alarm Stopped");
}
