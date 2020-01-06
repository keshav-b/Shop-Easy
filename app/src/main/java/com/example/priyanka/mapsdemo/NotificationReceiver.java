package com.example.priyanka.mapsdemo;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;


public class NotificationReceiver extends BroadcastReceiver {

    DatabaseReference reff;
    public static String vn,test,offertext,offerlink;

    @Override
    public void onReceive(Context context, Intent intent) {
        String message = intent.getStringExtra("toastMessage");
       // Toast.makeText(context, message, Toast.LENGTH_SHORT).show();




       Uri uri = Uri.parse("http://poorvika-ramco.000webhostapp.com"); // missing 'http://' will cause crashed
        Intent i = new Intent(Intent.ACTION_VIEW, uri);
        context.startActivity(i);



    }
}