import PyPDF2
import json

# Open the PDF file
pdf_path = './NFL24_CS_PPR300.pdf'
pdf_file = open(pdf_path, 'rb')

# Create a PDF reader object
pdf_reader = PyPDF2.PdfReader(pdf_file)

# Initialize a list to store player data
player_data = []

# Extract and parse text from each page
for page_num in range(len(pdf_reader.pages)):
    page = pdf_reader.pages[page_num]
    text = page.extract_text()

    # Split the text into lines
    lines = text.splitlines()

    # Iterate over each line and extract player data
    for line in lines:
        if len(line.split()) > 6 and ('(RB' in line or '(WR' in line or '(QB' in line or '(TE' in line):
            # Extract rank
            rank = line.split('.')[0]
            # Extract position within parentheses
            position = line[line.find('(')+1:line.find(')')]
            # Extract player name, assuming it ends at the comma
            player_name = line.split(',')[0].split(' ', 2)[2]
            # Extract team, price, and bye week
            remaining = line.split(',')[1].strip().split(' ')
            team = remaining[0]
            price = remaining[1].strip('$')
            bye_week = remaining[2]

            player_data.append({
                'rank': rank,
                'position': position,
                'player_name': player_name,
                'team': team,
                'price': price,
                'bye_week': bye_week
            })

# Save the parsed data to a JSON file
with open('espn_rankings.json', 'w') as f:
    json.dump(player_data, f, indent=4)

# Close the PDF file
pdf_file.close()
