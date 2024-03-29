.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2; /* Set a value higher than the table's z-index */
}


const useStyles = makeStyles((theme) => ({
  customDatePicker: {
    '&::-webkit-calendar-picker-indicator': {
      backgroundColor: '#ffcc00',
      color: 'white',
      // Other styles...
    },
    '&::-webkit-inner-spin-button': {
      backgroundColor: '#333',
      color: 'white',
      // Other styles...
    },
    '&::-webkit-clear-button': {
      backgroundColor: '#ff0000',
      color: 'white',
      // Other styles...
    },
    // Other custom styles for the TextField...
  },
}));



/* NotFound.css */
.not-found-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Set the container height to fill the entire viewport */
}

h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

p {
  font-size: 1rem;
}




import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import './NotFound.css'; // Import the CSS file for styling

function NotFound() {
  const [countdown, setCountdown] = useState(5); // Initial countdown value in seconds
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    // Redirect to home page when countdown reaches zero
    if (countdown === 0) {
      history.push('/');
    }

    // Decrease the countdown every second
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [countdown, history]);

  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>
        The page at "{location.pathname}" was not found. Redirecting to home page in {countdown}{' '}
        seconds...
      </p>
    </div>
  );
}

export default NotFound;








import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function NotFound() {
  const [countdown, setCountdown] = useState(5); // Initial countdown value in seconds
  const history = useHistory();

  useEffect(() => {
    // Redirect to home page when countdown reaches zero
    if (countdown === 0) {
      history.push('/');
    }

    // Decrease the countdown every second
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [countdown, history]);

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Redirecting to home page in {countdown} seconds...</p>
    </div>
  );
}

export default NotFound;





using Microsoft.EntityFrameworkCore;

using System;

using System.Linq;

using System.Linq.Expressions;

using System.Reflection;

// ...

public static class QueryableExtensions

{

    public static IQueryable<T> OrderByProperty<T>(this IQueryable<T> query, string propertyName, bool isAscending)

    {

        var entityType = typeof(T);

        var propertyInfo = entityType.GetProperty(propertyName, BindingFlags.IgnoreCase | BindingFlags.Public | BindingFlags.Instance);

        if (propertyInfo == null)

        {

            throw new ArgumentException($"Property '{propertyName}' not found on type '{entityType.Name}'.");

        }

        var parameter = Expression.Parameter(entityType, "x");

        var propertyExpression = Expression.Property(parameter, propertyInfo);

        var lambda = Expression.Lambda(propertyExpression, parameter);

        var methodName = isAscending ? "OrderBy" : "OrderByDescending";

        var methodCallExpression = Expression.Call(

            typeof(Queryable),

            methodName,

            new[] { entityType, propertyInfo.PropertyType },

            query.Expression,

            Expression.Quote(lambda)

        );

        return query.Provider.CreateQuery<T>(methodCallExpression);

    }

}











var query = dbContext.People.AsQueryable();

string sortColumn = "Name";

bool isAscending = true;

query = query.OrderByProperty(sortColumn, isAscending);

var sortedPeople = query.ToList();



using System;

using System.Linq;

using System.Linq.Expressions;

using System.Reflection;

public static class QueryableExtensions

{

    public static IQueryable<T> OrderByProperty<T, TEntity>(this IQueryable<T> source, string propertyName, bool isAscending)

    {

        var propertyInfo = typeof(TEntity).GetProperty(propertyName, BindingFlags.IgnoreCase | BindingFlags.Public | BindingFlags.Instance);

        if (propertyInfo == null)

        {

            throw new ArgumentException($"Property '{propertyName}' not found on type '{typeof(TEntity).Name}'.");

        }

        var parameter = Expression.Parameter(typeof(T), "x");

        var propertyAccess = Expression.Property(parameter, propertyInfo);

        var orderByExp = Expression.Lambda(propertyAccess, parameter);

        var orderByMethod = isAscending ? "OrderBy" : "OrderByDescending";

        var resultExpression = Expression.Call(

            typeof(Queryable),

            orderByMethod,

            new[] { typeof(T), propertyInfo.PropertyType },

            source.Expression,

            Expression.Quote(orderByExp)

        );

        return source.Provider.CreateQuery<T>(resultExpression);

    }

}
hh


using System;

using System.Linq;

using System.Linq.Expressions;

using System.Reflection;

public static class QueryableExtensions

{

    public static IQueryable<T> OrderByProperty<T>(this IQueryable<T> source, string propertyName, bool isAscending)

    {

        var parameter = Expression.Parameter(typeof(T), "x");

        var propertyAccess = GetInnerExpression(parameter, propertyName);

        var orderByExp = Expression.Lambda(propertyAccess, parameter);

        var orderByMethod = isAscending ? "OrderBy" : "OrderByDescending";

        var resultExpression = Expression.Call(

            typeof(Queryable),

            orderByMethod,

            new[] { typeof(T), propertyAccess.Type },

            source.Expression,

            Expression.Quote(orderByExp)

        );

        return source.Provider.CreateQuery<T>(resultExpression);

    }

    private static Expression GetInnerExpression(Expression expression, string propertyName)

    {

        foreach (var prop in propertyName.Split('.'))

        {

            expression = Expression.PropertyOrField(expression, prop);

        }

        return expression;

    }

}uffu



