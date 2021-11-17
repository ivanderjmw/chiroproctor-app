import { useSubscription, useMqttState } from "mqtt-react-hooks";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import CellWifiIcon from "@mui/icons-material/CellWifi";

import "./Status.css";

export default function Status() {
  const { message: batteryMsg } = useSubscription("Group_2/battery");
  const { message: predictionMsg } = useSubscription("Group_2/predict");
  const { connectionStatus } = useMqttState();

  return (
    <>
      <div>
        <h2>Live Status</h2>

        <div>
          <BatteryChargingFullIcon fontSize="small" />
          <span>
            Battery Status:{" "}
            {batteryMsg?.message && JSON.parse(batteryMsg.message)?.battery
              ? JSON.parse(batteryMsg.message)?.battery
              : "None"}
          </span>
        </div>

        <div>
          <AccessibilityIcon fontSize="small" />
          <span>
            Current posture:{" "}
            {predictionMsg?.message &&
            JSON.parse(predictionMsg.message)?.prediction
              ? JSON.parse(predictionMsg.message)?.prediction
              : "None"}
          </span>
        </div>

        <div>
          <CellWifiIcon fontSize="small" />
          <span>
            Connection state:{" "}
            <span className={`status-${connectionStatus === "Connected"}`}>
              {connectionStatus}
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
