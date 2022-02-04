import csv

def main():
    csv_file = csv.DictReader(open('TeamData.CSV', 'r', encoding="utf-8"))
    for row in csv_file:
        print(row["TeamName"]+" "+row["TeamNumber"]+" "+row["Fouls"]+" "+row["Wins"]+" "+row["Losses"]+" "+row["PrimaryColor"]+" "+row["SecondaryColor"]+" "+row["RankingPoints"]+" "+row["EndgameSuccessRate"])
if __name__ == "__main__":
    main()