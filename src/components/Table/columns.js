const columns = [
  {
    title: "S.No.",
    dataIndex: "s.no",
    key: "serialNumber",
    render: (data) => data + 1,
  },
  {
    title: "Percentage funded",
    dataIndex: "percentage.funded",
    key: "percentageFunded",
    sorter: (a, b) => a["percentage.funded"] - b["percentage.funded"],
  },
  {
    title: "Amount pledged",
    dataIndex: "amt.pledged",
    key: "amtPledged",
    sorter: (a, b) => a["amt.pledged"] - b["amt.pledged"],
  },
];

export default columns;
