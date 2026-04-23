import React, { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectData {
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  images?: string[];
  sections?: Array<{
    title: string;
    paragraphs?: string[];
    bullets?: string[];
    cards?: Array<{
      title: string;
      description: string;
      value?: string;
    }>;
    code?: string;
  }>;
  clientMessage?: string;
  longDescription?: string;
  rating?: number;
}

const Projects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projectsData: ProjectData[] = [
    {
      title: "Customer Churn Analysis",
      description:
        "Excel-based churn analysis uncovering the strongest retention drivers across contract type, tenure, and billing behavior.",
      techStack: ["Excel", "Data Analysis", "Pivot Tables", "Visualizations"],
      liveLink: "https://github.com/wilfex81/Telco-Customer-Churn/tree/main",
      images: ["/project-images/churn_rate.png"],
      longDescription:
        "This project analyzes customer churn to identify the key factors influencing retention.",
      sections: [
        {
          title: "Project Overview",
          paragraphs: [
            "This project analyzes customer churn to identify key factors influencing customer retention. Using Excel pivot tables and visualizations, I determined who churns, why they churn, and which factors matter most for business decisions.",
          ],
        },
        {
          title: "The Dashboard",
          paragraphs: [
            "The dashboard provides a high-level view of customer churn patterns, highlighting the most influential factors affecting customer retention. It shows that churn is primarily driven by contract type, with month-to-month customers exhibiting significantly higher churn rates compared to customers on longer-term contracts.",
            "Additional segmentation confirms that demographic factors such as gender have minimal impact on churn, allowing focus to remain on behavioral and contractual drivers. The dashboard is designed to support fast, data-driven decisions by clearly identifying high-risk customer groups and areas where retention efforts will have the greatest impact.",
          ],
        },
        {
          title: "About the Data",
          paragraphs: [
            "Source: Telecom Customer Churn dataset",
          ],
          bullets: [
            "Customer ID",
            "Churn status (Yes/No)",
            "Contract type",
            "Tenure",
            "Monthly and total charges",
            "Demographics (gender)",
            "Services subscribed",
          ],
        },
        {
          title: "Key Findings",
          cards: [
            {
              value: "26.5%",
              title: "Overall Churn Rate",
              description: "More than a quarter of customers churned during the analysis period.",
            },
            {
              value: "42.7%",
              title: "Month-to-Month Churn",
              description: "Highest churn rate by far. One-year contracts: 11.3%. Two-year: just 2.8%.",
            },
            {
              value: "~0%",
              title: "Gender Impact",
              description: "Female: 26.92% vs Male: 26.16% - gender is not a meaningful driver.",
            },
          ],
        },
        {
          title: "Key Insights",
          cards: [
            {
              title: "Contract Type is the Strongest Driver",
              description: "Longer contracts dramatically reduce churn. The difference between month-to-month (42.7%) and two-year contracts (2.8%) is massive.",
            },
            {
              title: "Gender Has No Impact",
              description: "Churn rates are nearly identical across genders, so this variable can be deprioritized in retention strategies.",
            },
            {
              title: "Actionable Focus",
              description: "Prioritize migrating month-to-month customers to longer-term contracts for the highest retention impact.",
            },
          ],
        },
        {
          title: "Tools & Technologies",
          bullets: [
            "Microsoft Excel",
            "Pivot Tables",
            "Calculated Percentages",
            "Column Charts",
            "Dashboard Design",
          ],
        },
        {
          title: "Business Recommendations",
          bullets: [
            "Focus retention efforts on month-to-month customers",
            "Encourage migration to longer-term contracts through incentives",
            "Avoid demographic-based churn strategies - they won't move the needle",
            "Prioritize variables with measurable behavioral influence",
          ],
        },
        {
          title: "Conclusion",
          paragraphs: [
            "This analysis demonstrates a structured, hypothesis-driven approach emphasizing signal over noise to deliver clear, decision-focused insights for business environments.",
          ],
        },
      ],
      rating: 5,
    },
    {
      title: "Exploratory Data Analysis",
      description:
        "SQL-driven analysis of 2022 layoffs data to clean the dataset and uncover industry, timing, and company-stage patterns.",
      techStack: ["SQL", "Data Analysis", "Window Functions", "Data Cleaning"],
      liveLink: "https://github.com/wilfex81/SQL_DATA_CLEANING_FIRST_EXERCISE/blob/main/Exploratory%20Data%20Analysis.sql",
      images: ["/project-images/eda.jpg"],
      longDescription:
        "This project explores a 2022 layoffs dataset using SQL to clean the data and uncover meaningful patterns in company downsizing.",
      sections: [
        {
          title: "Project Overview",
          paragraphs: [
            "This project involved conducting comprehensive exploratory data analysis on a 2022 layoffs dataset to uncover hidden patterns, trends, and outliers. Using SQL queries, I identified key insights into industry-specific downsizing patterns and seasonal layoff trends.",
          ],
        },
        {
          title: "About the Data",
          paragraphs: [
            "The dataset captures layoff events from various companies throughout 2022, including:",
          ],
          bullets: [
            "Company names and industries",
            "Layoff dates and announcement details",
            "Number of employees affected",
            "Company location and headquarters",
            "Company stage (startup, established, etc.)",
            "Funding information",
          ],
        },
        {
          title: "The Process",
          paragraphs: [
            "Before analysis, the data underwent thorough cleaning using SQL:",
          ],
          bullets: [
            "Removed duplicate records using ROW_NUMBER() window function",
            "Standardized company names and industry categories",
            "Handled NULL values appropriately",
            "Converted date strings to proper DATE format",
            "Validated numerical fields for consistency",
          ],
          code: "-- Example: Removing duplicates\nWITH duplicates AS (\n    SELECT *,\n           ROW_NUMBER() OVER(\n               PARTITION BY company, location, industry, date\n               ORDER BY company\n           ) AS row_num\n    FROM layoffs_staging\n)\nDELETE FROM duplicates WHERE row_num > 1;",
        },
        {
          title: "Exploratory Analysis",
          paragraphs: [
            "The EDA phase involved asking and answering key questions about the data:",
          ],
          bullets: [
            "Which industries were most affected by layoffs?",
            "What was the temporal distribution of layoffs?",
            "Which companies had the largest layoffs?",
            "How did layoffs vary by company stage?",
            "Were there geographic patterns in the data?",
          ],
        },
        {
          title: "Pattern Discovery",
          paragraphs: [
            "Using aggregations, groupings, and window functions to discover patterns:",
          ],
          code: "-- Monthly layoff trends\nSELECT \n    DATE_FORMAT(date, '%Y-%m') AS month,\n    SUM(total_laid_off) AS monthly_layoffs\nFROM layoffs_staging\nWHERE date IS NOT NULL\nGROUP BY month\nORDER BY month;",
        },
        {
          title: "Key Findings",
          cards: [
            {
              title: "Industry Impact",
              description: "Layoffs were concentrated in a relatively small number of industries, with the analysis showing that sector and company type were major drivers of impact.",
            },
            {
              title: "Seasonal Patterns",
              description: "Layoff activity changed noticeably over time, with clear spikes that align with broader market pressure and economic uncertainty.",
            },
            {
              title: "Company Stage",
              description: "The dataset includes a mix of startup and established companies, showing that layoffs affected organizations at different maturity levels.",
            },
            {
              title: "Geographic Distribution",
              description: "The layoffs were not evenly distributed geographically, with clear clusters appearing across specific regions and headquarters locations.",
            },
          ],
        },
        {
          title: "SQL Techniques Used",
          cards: [
            {
              title: "Window Functions",
              description: "ROW_NUMBER(), RANK(), running totals with SUM() OVER()",
            },
            {
              title: "CTEs",
              description: "Common Table Expressions for complex multi-step queries",
            },
            {
              title: "Aggregations",
              description: "GROUP BY, HAVING, COUNT, SUM, AVG for statistical summaries",
            },
            {
              title: "Date Functions",
              description: "DATE_FORMAT, YEAR, MONTH for temporal analysis",
            },
          ],
        },
        {
          title: "Tools & Technologies",
          bullets: ["SQL", "MySQL", "Data Cleaning", "Window Functions", "CTEs"],
        },
        {
          title: "Conclusion & Insights",
          paragraphs: [
            "This exploratory analysis revealed several important insights about the 2022 layoff landscape:",
          ],
          bullets: [
            "Industry and company-type patterns were the most visible sources of layoff concentration",
            "Temporal trends suggested that workforce reductions moved in step with broader economic pressure",
            "Regional clustering showed that layoffs were concentrated rather than evenly spread",
            "The analysis can support workforce planning, risk assessment, and operational forecasting",
          ],
        },
      ],
      rating: 5,
    },
    {
      title: "Retail Sales Performance Analysis",
      description:
        "Interactive Excel dashboard that transforms raw retail sales data into clear performance metrics, trends, and decision-ready insights.",
      techStack: ["Excel", "Data Analysis", "Dashboard Design", "Financial Insights"],
      liveLink: "https://github.com/wilfex81/Sales-Revenue-Analysis?tab=readme-ov-file#dashboard",
      images: ["/project-images/Dashboard.png"],
      longDescription:
        "This project cleans raw retail sales data and turns it into an interactive Excel dashboard built for quick business review.",
      sections: [
        {
          title: "Project Overview",
          paragraphs: [
            "This project focused on cleaning raw sales data and transforming it into an interactive Excel dashboard. The dashboard provides key financial insights, trends, and performance metrics that enable better decision-making for retail stakeholders.",
          ],
        },
        {
          title: "About the Data",
          paragraphs: ["The dataset contains retail sales transactions including:"],
          bullets: [
            "Transaction dates and timestamps",
            "Product categories and SKUs",
            "Sales amounts and quantities",
            "Regional and store information",
            "Customer segments",
          ],
        },
        {
          title: "The Process",
          paragraphs: ["The raw data required extensive cleaning before analysis:"],
          bullets: [
            "Identified and removed duplicate transactions",
            "Corrected data type inconsistencies",
            "Handled missing values in key fields",
            "Standardized date formats and categories",
            "Created calculated columns for analysis",
          ],
        },
        {
          title: "Dashboard Design",
          paragraphs: ["The dashboard was designed with usability and clarity in mind:"],
          bullets: [
            "Created a clear visual hierarchy",
            "Used consistent color coding for metrics",
            "Added interactive slicers for filtering",
            "Included KPI cards for at-a-glance insights",
          ],
        },
        {
          title: "Visualization Components",
          paragraphs: ["The dashboard includes several visualization types:"],
          bullets: [
            "Line charts for trend analysis",
            "Bar charts for category comparisons",
            "Pie charts for composition breakdown",
            "KPI indicators for performance tracking",
          ],
        },
        {
          title: "Key Findings",
          cards: [
            {
              value: "$2.30M",
              title: "Total Revenue",
              description: "The dashboard shows total sales revenue of $2,297,200.86 across the reporting period.",
            },
            {
              value: "$598.66K",
              title: "Total Profit",
              description: "Profit significantly outpaced losses, with total profit at $598,659.59 versus $156,131.29 in losses.",
            },
            {
              value: "12,266",
              title: "West Region Volume",
              description: "The West region recorded the highest quantity at 12,266 units, making it the strongest regional market.",
            },
          ],
        },
        {
          title: "Dashboard Features",
          cards: [
            {
              title: "Interactive Filters",
              description: "Users can filter data by date range, region, product category, and customer segment.",
            },
            {
              title: "KPI Tracking",
              description: "Real-time KPI cards showing total sales, average order value, and growth metrics.",
            },
            {
              title: "Trend Analysis",
              description: "Visual trend lines showing performance over time with month-over-month comparisons.",
            },
          ],
        },
        {
          title: "Tools & Technologies",
          bullets: [
            "Microsoft Excel",
            "Pivot Tables",
            "Charts & Graphs",
            "Slicers",
            "Conditional Formatting",
          ],
        },
        {
          title: "Conclusion & Business Impact",
          paragraphs: ["This dashboard provides stakeholders with actionable insights for decision-making:"],
          bullets: [
            "Standard Class dominates shipping performance with $1,358,215.74 in sales, while First Class, Second Class, and Same Day remain meaningful secondary channels",
            "Quantity is strongest in the West and East regions, with the South trailing behind the other markets",
            "Sales, profit, and loss views together provide a balanced picture of where the business is performing well and where it needs attention",
            "The dashboard supports faster inventory, logistics, and planning decisions by making the main operational metrics visible at a glance",
          ],
        },
      ],
      rating: 5,
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  const handleViewMore = () => {
    // Show 6 more projects when the button is clicked
    setVisibleProjects((prev) => Math.min(prev + 6, projectsData.length));
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="section-padding"
    >
      <div className="container mx-auto container-padding max-w-6xl">
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-4">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
            Data Analysis Projects
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            A collection of data analysis projects showcasing expertise in Excel dashboards, 
            SQL analysis, and deriving actionable insights from complex datasets.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.slice(0, visibleProjects).map((project, index) => (
            <div
              key={project.title}
              className={cn(
                "opacity-0 transform translate-y-4 transition-all duration-500",
                inView && "opacity-100 translate-y-0"
              )}
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                index={index}
                liveLink={project.liveLink}
                images={project.images}
                sections={project.sections}
                clientMessage={project.clientMessage}
                longDescription={project.longDescription}
                rating={project.rating}
              />
            </div>
          ))}
        </div>

        {visibleProjects < projectsData.length && (
          <div className="mt-16 text-center">
            <button
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary transition-all hover:bg-primary hover:text-primary-foreground"
              onClick={handleViewMore}
            >
              View More
              <ChevronDown size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
