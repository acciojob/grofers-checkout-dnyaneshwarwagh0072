const getSumBtn = document.createElement("button");
        getSumBtn.append("Get Total Price");
        document.body.appendChild(getSumBtn);

        const getSum = () => {
            // Get all price elements
            const prices = document.querySelectorAll('.price');
            
            // Calculate the total price
            let totalPrice = 0;
            prices.forEach(price => {
                totalPrice += parseFloat(price.textContent);
            });

            // Create a new row for the total price
            const totalRow = document.createElement('tr');
            const totalCell = document.createElement('td');
            totalCell.setAttribute('colspan', '2'); // Span across all columns
            totalCell.textContent = 'Total Price: ' + totalPrice;

            // Append the total price row to the table
            totalRow.appendChild(totalCell);
            document.getElementById('grocery-list').appendChild(totalRow);
        };

        getSumBtn.addEventListener("click", getSum);