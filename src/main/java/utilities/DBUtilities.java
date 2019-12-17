package utilities;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DBUtilities {
	
		// creating private static obj of connection class
		private static Connection conn;
		// creating private static obj of statement calss
		private static Statement stmt;
		// creating private static obj of results class
		// its used to create a result set to store query restul
		private static ResultSet resultSet;

		// create db Url
		// syntax for db url connection or url string
		// url:jdbc:typeofdatabase://host:port/databasename
		private static String dbURL = "jdbc:postgresql://localhost:5432/dvdrental";
		// database username
		private static String dbUserName = "postgres";
		// database pass
		private static String dbPassword = "root";

		public static void setUpConnection() {
			try {
				conn = DriverManager.getConnection(dbURL, dbUserName, dbPassword);
			} catch (SQLException e) {
				e.printStackTrace();

			}}

		public static void closeConnection() {
				if (conn != null) {
					try {
						conn.close();
					} catch (Exception e) {
		}
		}}}
