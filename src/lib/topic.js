const topicsData = [
  {
    name: "Web Design",
    color: "_orange",
    style: {
      backgroundColor: "#ffe4c2",
      color: "#ff6d00",
    },
  },
  {
    name: "Research",
    color: "_green",
    style: {
      backgroundColor: "#b4fdd1",
      color: "#06b16e",
    },
  },
  {
    name: "Copywriting",
    color: "_purple",
    style: {
      backgroundColor: "#e9d4ff",
      color: "#9a48f1",
    },
  },
];

const getTopicStyle = (topicName) => {
  const topic = topicsData.find((t) => t.name === topicName);
  return topic ? topic.style : { backgroundColor: "#b4fdd1", color: "#06b16e" };
};

export { topicsData, getTopicStyle };
