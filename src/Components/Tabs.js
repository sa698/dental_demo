import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";

function NoteTabs(props) {
  const [value, setValue] = useState(0); // Set the default selected tab to 0 (Tab 1)
  const [isCollapseOpen, setCollapseOpen] = useState(false);
  const [comment, setComment] = useState("");

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const handleCollapseToggle = () => {
    setCollapseOpen(!isCollapseOpen);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  // Filter the selected values by "Tooth"
  const toothValues = props.selectedValues.filter((item) =>
    item.includes("Tooth")
  );

  // Filter the selected values by "Root"
  const rootValues = props.selectedValues.filter((item) =>
    item.includes("Root")
  );

  return (
    <Box
      style={{
        border:"1px solid rgba(5, 5, 5, 0.06)",
        height: "100%",
      }}
      sx={{ width: "100%" }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        style={{
          background: "#68cccc",
        }}
      >
        <Tab
          label="All"
          onClick={handleCollapseToggle}
          style={{
            borderBottom: `3px solid ${value === 0 ? "brown" : "transparent"}`,  
            color: value === 0 ? "white" : "inherit",  
          }}
        />
        <Tab
          label="Treatment"
          style={{
            borderBottom: `3px solid ${value === 1 ? "brown" : "transparent"}`, 
            color: value === 1 ? "white" : "inherit",  
          }}
        />
        <Tab
          label="Notes"
          style={{
            borderBottom: `3px solid ${value === 2 ? "brown" : "transparent"}`,  
            color: value === 2 ? "white" : "inherit", 
          }}
        />
      </Tabs>
      <Box sx={{ padding: 2 }}>
        <Collapse
          style={{
            border:"1px solid rgba(5, 5, 5, 0.06)",
            padding: "10px",
            borderRadius: "5px", 
          }}
          in={isCollapseOpen}
        >
          <Typography>{"Today"}</Typography>
          <p>{props.dataSourse[0]}</p>
          <Divider />
     
          <div>
            <h2>Tooth</h2>
            {toothValues.map((item, index) => (
              <div
                style={{ display: "flex", alignItems: "center" }}
                key={index}
              >
                <b style={{ paddingRight: "5px" }}>{index + 1}</b>
                {item.map((value, innerIndex) => (
                  <p key={innerIndex} style={{ marginRight: "10px" }}>
                    {value}
                  </p>
                ))}
              </div>
            ))}

            <h2>Root </h2>
            {rootValues.map((item, index) => (
              <div
                style={{ display: "flex", alignItems: "center" }}
                key={index}
              >
                <b style={{ paddingRight: "5px" }}>{index + 1}</b>
                {item.map((value, innerIndex) => (
                  <p key={innerIndex} style={{ marginRight: "10px" }}>
                    {value}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {props.dataSourse && (
            <TextField
              label="Add a comment"
              variant="outlined"
              fullWidth
              value={comment}
              onChange={handleCommentChange}
            />
          )}
        </Collapse>
      </Box>
    </Box>
  );
}

export default NoteTabs;
