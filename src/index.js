
	  	var loaded = false;
	  	var commonData = {};
	  	function processResponse(coin) {
	  		$.get(coin.url, function(data){  	
				coin.price= JSON.parse(data).pop().pop();
		  		var row = '<tr>' + 
		  		' <td>' + coin.index + '</td>' + 
		  		' <td>' + coin.coin + '</td>' + 
		  		' <td>' + coin.site + '</td>' + 
		  		' <td>' + coin.price + '</td>' + 
		  		' <td><a target="_blank" href="' + coin.link +'"> Go </td>' +  
		  		' </tr>';
		  		$('#coins-table').append(row);
			});
	  		
	  	}
	  	function processKoinexResponse(coin) {
	  		data = commonData;
	  		coin.price= data.prices[coin.coin];
	  		var row = '<tr>' + 
	  		' <td>' + coin.index + '</td>' + 
	  		' <td>' + coin.coin + '</td>' + 
	  		' <td>' + coin.site + '</td>' + 
	  		' <td>' + coin.price + '</td>' + 
	  		' <td><a target="_blank" href="' + coin.link +'"> Go </td>' +  
	  		' </tr>';
	  		$('#coins-table').append(row);
	  	}

	  	var coins = [{
	  					index : 1,
	  					coin : 'XRP',
	  					site : 'BTCX India',
	  					url : 'https://btcxindia.com/chartjon',
	  					link : 'https://m.btcxindia.com/trade',
	  					process: processResponse

				  	},
				  	{
	  					index : 2,
	  					coin : 'XRP',
	  					site : 'KOINEX India',
	  					url : 'https://koinex.in/api/ticker',
	  					link : 'https://koinex.in/exchange/ripple',
	  					process: processKoinexResponse

				  	},
				  	{
	  					index : 3,
	  					coin : 'ETH',
	  					site : 'ETHEX India',
	  					url : 'https://ethexindia.com/chartjon',
	  					link : 'https://m.ethexindia.com/trade',
	  					process: processResponse

				  	},
				  	{
	  					index : 4,
	  					coin : 'ETH',
	  					site : 'KOINEX India',
	  					url : 'https://koinex.in/api/ticker',
	  					link : 'https://koinex.in/exchange/ether',
	  					process: processKoinexResponse

				  	},
				  	{
	  					index : 5,
	  					coin : 'BTC',
	  					site : 'KOINEX India',
	  					url : 'https://koinex.in/api/ticker',
	  					link : 'https://koinex.in/exchange/bitcoin',
	  					process: processKoinexResponse

				  	},
				  	{
	  					index : 6,
	  					coin : 'BCH',
	  					site : 'KOINEX India',
	  					url : 'https://koinex.in/api/ticker',
	  					link : 'https://koinex.in/exchange/bitcoin_cash',
	  					process: processKoinexResponse

				  	},
				  	{
	  					index : 7,
	  					coin : 'LTC',
	  					site : 'KOINEX India',
	  					url : 'https://koinex.in/api/ticker',
	  					link : 'https://koinex.in/exchange/litecoin',
	  					process: processKoinexResponse

				  	}];
	  	

	  	function load(index, coin) {
	  		coin.process(coin);			
	  	}

		function check() {
			$.get('https://koinex.in/api/ticker', function(data){  	
					commonData = data;
					$('#coins-table').empty();
					$.each(coins, load);
			});
		}

		$(function() {
			check();
			setInterval(check, 30000);
		});
