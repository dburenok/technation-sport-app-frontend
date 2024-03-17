import { CircularProgress, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Typography from "@mui/material/Typography";
import { isEmpty, map, startCase } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { IMAGE_PATH_URL, MEAL_PLAN_URL } from "../constants/endpoints";

const DEFAULT_FOOD_ITEMS = ["Apples", "Milk", "Bananas", "Apples", "Milk", "Bananas"];

export function AthleteDashboard({ props }) {
  const { loggedInUserId } = props;
  const [fridgeImagePath, setFridgeImagePath] = useState("");
  const [mealPlan, setMealPlan] = useState(null);
  const [foodItems, setFoodItems] = useState(DEFAULT_FOOD_ITEMS);

  const fetchData = useCallback(() => {
    async function fetchFridgeImagePath() {
      const res = await fetch(`${IMAGE_PATH_URL}/${loggedInUserId}`);
      const { imagePath } = await res.json();
      setFridgeImagePath(imagePath);
    }

    async function fetchMealPlan() {
      const res = await fetch(`${MEAL_PLAN_URL}/${loggedInUserId}`);
      const data = await res.json();

      if (!data.data) {
        return;
      }

      setMealPlan(data.data);
      setFoodItems(map(data.data.foodItems.split(","), (w) => startCase(w)));
    }

    fetchFridgeImagePath().then(() => fetchMealPlan());
  }, [loggedInUserId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (!mealPlan) {
    return (
      <div className="dashboard">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Generating meal plan...
        </Typography>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="dashboard">
      <Typography variant="h4" gutterBottom>
        Your personalized meal plan:
      </Typography>
      {map(mealPlan.output.split("\n"), (section, i) => {
        if (isEmpty(section)) {
          return;
        }

        if (section.includes("Day ") || section.includes("advice:")) {
          return (
            <Typography key={i} variant="h6" textAlign="center" fontWeight="bold" gutterBottom>
              {section}
            </Typography>
          );
        }

        return (
          <Typography key={i} variant="body1" textAlign="left" gutterBottom>
            {section}
          </Typography>
        );
      })}

      <Typography variant="h4" gutterBottom>
        Your fridge contains:
      </Typography>
      {fridgeImagePath !== "" && <img src={fridgeImagePath} width={200} alt="User's fridge" />}

      <List>
        {map(foodItems, (item, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton>
              <ListItemText primary={`• ${item}`} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
