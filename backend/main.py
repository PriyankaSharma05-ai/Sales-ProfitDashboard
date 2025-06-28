from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Backend is running 🎉"}

@app.get("/summary")
def get_summary():
    return {
        "total_sales": "$1,200,000",
        "total_profit": "$300,000",
        "top_category": "Electronics",
        "top_region": "North America"
    }

@app.get("/timeseries")
def get_timeseries():
    return [
        {"year": 2010, "sales": 100000, "profit": 25000},
        {"year": 2015, "sales": 300000, "profit": 80000},
        {"year": 2020, "sales": 800000, "profit": 190000}
    ]

@app.get("/filter-options")
def get_filters():
    return {
        "year": ["All", 2010, 2015, 2020],
        "region": ["All", "North America", "Europe", "Asia"],
        "category": ["All", "Electronics", "Furniture"],
        "segment": ["All", "Consumer", "Corporate"]
    }


