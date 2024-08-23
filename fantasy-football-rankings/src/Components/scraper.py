import requests
from bs4 import BeautifulSoup

# URL for ESPN's rankings (replace with the actual URL for the 2024 season rankings)
url = 'https://www.espn.com/fantasy/football/rankings'

response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

# Find the rankings table or list
# You need to inspect the page and find the correct HTML structure
rankings = []

for row in soup.select('selector-for-rankings'):  # Replace with actual selector
    player_name = row.select_one('selector-for-player-name').text.strip()
    rank = row.select_one('selector-for-rank').text.strip()
    rankings.append({'player': player_name, 'rank': rank})

# Output the scraped data (for testing purposes)
for rank in rankings:
    print(rank)
